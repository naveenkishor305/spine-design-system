"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useDocsNavigation } from "@/components/layout/docs-navigation-provider";
import { SearchDialog } from "@/components/layout/search-dialog";
import { documentationNavigation } from "@/data/navigation";

export function SiteHeader() {
  const { activeHref, navigateTo } = useDocsNavigation();

  const activeLabel =
    documentationNavigation.find(
      (item) => item.href === activeHref,
    )?.label ?? "Overview";

  const handleHomeClick = (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    navigateTo("#overview");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-border-subtle bg-surface/95 backdrop-blur">
      <div className="flex h-full items-center">
        <a
          href="#overview"
          onClick={handleHomeClick}
          className="flex h-full w-[264px] items-center border-r border-border-subtle px-5"
          aria-label="Spine Design System home"
        >
          <Image
            src="/brand/spine-lockup.svg"
            alt="Spine Design System"
            width={145}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </a>

        <div className="flex flex-1 items-center justify-between gap-4 px-6">
          <div className="hidden items-center gap-2 text-xs text-ink-secondary sm:flex">
            <span>Clinical operations</span>
            <span
              aria-hidden="true"
              className="text-border-default"
            >
              /
            </span>
            <span
              className="font-medium text-ink-primary"
              aria-live="polite"
            >
              {activeLabel}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <SearchDialog />

            <span className="rounded border border-border-default bg-surface-subtle px-2 py-1 text-[11px] font-semibold text-ink-secondary">
              v2.0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
