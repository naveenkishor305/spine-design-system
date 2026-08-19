"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { documentationNavigation } from "@/data/navigation";

const HEADER_OFFSET = 72;

type HistoryMode = "push" | "replace" | "none";

type DocsNavigationContextValue = {
  activeHref: string;
  navigateTo: (
    href: string,
    behavior?: ScrollBehavior,
    historyMode?: HistoryMode,
  ) => void;
};

const DocsNavigationContext =
  createContext<DocsNavigationContextValue | null>(null);

function isValidHref(href: string) {
  return documentationNavigation.some((item) => item.href === href);
}

function scrollToSection(
  href: string,
  behavior: ScrollBehavior = "smooth",
) {
  const section = document.getElementById(href.replace("#", ""));

  if (!section) {
    return;
  }

  const top =
    section.getBoundingClientRect().top +
    window.scrollY -
    HEADER_OFFSET;

  window.scrollTo({
    top: Math.max(0, top),
    behavior,
  });
}

export function DocsNavigationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeHref, setActiveHref] = useState("#overview");

  const updateActiveSection = useCallback(() => {
    let nextHref: (typeof documentationNavigation)[number]["href"] = documentationNavigation[0].href;

    for (const item of documentationNavigation) {
      const section = document.getElementById(
        item.href.replace("#", ""),
      );

      if (
        section &&
        section.getBoundingClientRect().top <= HEADER_OFFSET + 24
      ) {
        nextHref = item.href;
      }
    }

    const reachedPageEnd =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 2;

    if (reachedPageEnd) {
      nextHref =
        documentationNavigation[
          documentationNavigation.length - 1
        ].href;
    }

    setActiveHref(nextHref);

    if (window.location.hash !== nextHref) {
      window.history.replaceState(null, "", nextHref);
    }
  }, []);

  const navigateTo = useCallback(
    (
      href: string,
      behavior: ScrollBehavior = "smooth",
      historyMode: HistoryMode = "push",
    ) => {
      if (!isValidHref(href)) {
        return;
      }

      if (
        historyMode === "push" &&
        window.location.hash !== href
      ) {
        window.history.pushState(null, "", href);
      } else if (
        historyMode === "replace" &&
        window.location.hash !== href
      ) {
        window.history.replaceState(null, "", href);
      }

      setActiveHref(href);
      scrollToSection(href, behavior);
    },
    [],
  );

  useEffect(() => {
    let animationFrame: number | null = null;
    let initialFrame: number | null = null;
    let layoutFrame: number | null = null;

    const handleScroll = () => {
      if (animationFrame !== null) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        updateActiveSection();
        animationFrame = null;
      });
    };

    const handleHistoryNavigation = () => {
      const requestedHref = isValidHref(window.location.hash)
        ? window.location.hash
        : "#overview";

      setActiveHref(requestedHref);
      scrollToSection(requestedHref, "auto");
    };

    const initialHref = isValidHref(window.location.hash)
      ? window.location.hash
      : "#overview";


    initialFrame = window.requestAnimationFrame(() => {
      layoutFrame = window.requestAnimationFrame(() => {
        scrollToSection(initialHref, "auto");
        updateActiveSection();
      });
    });

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener(
      "hashchange",
      handleHistoryNavigation,
    );
    window.addEventListener(
      "popstate",
      handleHistoryNavigation,
    );

    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }

      if (initialFrame !== null) {
        window.cancelAnimationFrame(initialFrame);
      }

      if (layoutFrame !== null) {
        window.cancelAnimationFrame(layoutFrame);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "hashchange",
        handleHistoryNavigation,
      );
      window.removeEventListener(
        "popstate",
        handleHistoryNavigation,
      );
    };
  }, [updateActiveSection]);

  const value = useMemo(
    () => ({
      activeHref,
      navigateTo,
    }),
    [activeHref, navigateTo],
  );

  return (
    <DocsNavigationContext.Provider value={value}>
      {children}
    </DocsNavigationContext.Provider>
  );
}

export function useDocsNavigation() {
  const context = useContext(DocsNavigationContext);

  if (!context) {
    throw new Error(
      "useDocsNavigation must be used inside DocsNavigationProvider.",
    );
  }

  return context;
}

