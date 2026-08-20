"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";
import { documentationNavigation } from "@/data/navigation";

const HEADER_OFFSET = 72;

// Smooth-scrolling to a distant target (e.g. a sub-anchor found via search)
// can take longer than a fixed short delay on a long page. While it's in
// flight, the passive scroll listener below would otherwise "see" every
// section it scrolls past and rewrite the URL hash to match -- fighting
// the explicit navigation and leaving the address bar on whatever section
// the animation happened to be passing when this settle window ends.
const SCROLL_SETTLE_MS = 900;

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

const allNavigableHrefs = new Set(
  documentationNavigation.flatMap((item) => [
    item.href,
    ...(item.children?.map((child) => child.href) ?? []),
  ]),
);

function isValidHref(href: string) {
  return allNavigableHrefs.has(href);
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
  const suppressScrollSpyRef = useRef(false);
  const settleTimeoutRef = useRef<number | null>(null);

  const updateActiveSection = useCallback(() => {
    if (suppressScrollSpyRef.current) {
      return;
    }

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

      if (behavior === "smooth") {
        suppressScrollSpyRef.current = true;

        if (settleTimeoutRef.current !== null) {
          window.clearTimeout(settleTimeoutRef.current);
        }

        settleTimeoutRef.current = window.setTimeout(() => {
          suppressScrollSpyRef.current = false;
          settleTimeoutRef.current = null;
        }, SCROLL_SETTLE_MS);
      }

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

      if (settleTimeoutRef.current !== null) {
        window.clearTimeout(settleTimeoutRef.current);
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

