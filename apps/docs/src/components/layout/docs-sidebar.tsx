"use client";

import { useEffect } from "react";
import type { MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import { useDocsNavigation } from "@/components/layout/docs-navigation-provider";
import { documentationNavigation } from "@/data/navigation";

export function DocsSidebar() {
  const { activeHref, navigateTo } = useDocsNavigation();

  useEffect(() => {
    const activeLink = document.querySelector<HTMLAnchorElement>(
      `[data-doc-link="${activeHref}"]`,
    );
    const sidebar = activeLink?.closest("aside");

    if (!activeLink || !sidebar || sidebar.clientHeight === 0) {
      return;
    }

    const linkBounds = activeLink.getBoundingClientRect();
    const sidebarBounds = sidebar.getBoundingClientRect();

    if (linkBounds.top < sidebarBounds.top + 20) {
      sidebar.scrollBy({
        top: linkBounds.top - sidebarBounds.top - 28,
        behavior: "smooth",
      });
    } else if (
      linkBounds.bottom >
      sidebarBounds.bottom - 20
    ) {
      sidebar.scrollBy({
        top: linkBounds.bottom - sidebarBounds.bottom + 28,
        behavior: "smooth",
      });
    }
  }, [activeHref]);

  const handleNavigationClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    navigateTo(href);
  };

  return (
    <aside className="fixed bottom-0 left-0 top-14 hidden w-[264px] overflow-y-auto border-r border-border-subtle bg-surface lg:block">
      <nav
        className="px-3 py-6"
        aria-label="Spine Design System documentation"
      >
        <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-tertiary">
          Documentation
        </p>

        <ul className="space-y-1">
          {documentationNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeHref === item.href;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-doc-link={item.href}
                  aria-current={
                    isActive ? "location" : undefined
                  }
                  onClick={(event) =>
                    handleNavigationClick(event, item.href)
                  }
                  className={`flex min-h-10 items-center gap-3 rounded-md px-3 py-2 text-sm leading-5 transition-colors ${
                    isActive
                      ? "bg-selected font-semibold text-action"
                      : "text-ink-secondary hover:bg-surface-subtle hover:text-ink-primary"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.8}
                    className="shrink-0"
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mx-3 my-6 border-t border-border-subtle" />

        <div className="mx-3 rounded-lg bg-graphite p-4 text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">
            Portfolio case study
          </p>

          <p className="mt-2 text-sm font-semibold leading-5">
            Integrated OPD experience
          </p>

          <p className="mt-2 text-xs leading-5 text-white/65">
            Follow one patient journey across access,
            consultation, diagnostics, medication and revenue.
          </p>

          <a
            href="#clinical-patterns"
            onClick={(event) =>
              handleNavigationClick(
                event,
                "#clinical-patterns",
              )
            }
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#8FD3D0]"
          >
            View workflow
            <ArrowRight aria-hidden="true" size={13} />
          </a>
        </div>
      </nav>
    </aside>
  );
}
