"use client";

import { ArrowDown, ArrowUp, CornerDownLeft, Search, X } from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import { useDocsNavigation } from "@/components/layout/docs-navigation-provider";
import { searchIndex, type SearchIndexEntry } from "@/data/search-index";

function matches(entry: SearchIndexEntry, query: string) {
  const haystack = `${entry.label} ${entry.group} ${entry.keywords ?? ""}`.toLowerCase();
  return haystack.includes(query);
}

export function SearchDialog() {
  const { navigateTo } = useDocsNavigation();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return searchIndex.slice(0, 8);
    }
    return searchIndex.filter((entry) => matches(entry, trimmed)).slice(0, 20);
  }, [query]);

  // The source index is declared in contiguous group blocks, so a filtered
  // subset stays contiguous per group too -- grouping never reorders entries
  // relative to `results`, which keeps this flat index in sync with keyboard
  // navigation below.
  const grouped = useMemo(() => {
    const map = new Map<string, SearchIndexEntry[]>();
    for (const entry of results) {
      const list = map.get(entry.group) ?? [];
      list.push(entry);
      map.set(entry.group, list);
    }
    return Array.from(map.entries());
  }, [results]);

  function openDialog() {
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }

  useEffect(() => {
    function handleGlobalKeyDown(event: globalThis.KeyboardEvent) {
      const isModK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isModK) {
        event.preventDefault();
        if (open) {
          closeDialog();
        } else {
          openDialog();
        }
        return;
      }

      if (event.key === "Escape" && open) {
        closeDialog();
      }
    }

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [open]);

  // Imperative focus management on open -- not a setState call, so this
  // effect doesn't fall under the same "avoid setState in effects" rule.
  useEffect(() => {
    if (!open) {
      return;
    }

    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  function selectResult(href: string) {
    navigateTo(href);
    closeDialog();
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setActiveIndex(0);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const target = results[activeIndex];
      if (target) {
        selectResult(target.href);
      }
    }
  }

  let flatIndex = -1;

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="hidden h-9 min-w-60 items-center gap-2 rounded-md border border-border-default bg-surface px-3 text-left text-xs text-ink-secondary transition-colors hover:border-action md:flex"
        aria-label="Search Spine Design System"
      >
        <Search aria-hidden="true" size={15} />
        <span className="flex-1">Search the system</span>

        <kbd className="ds-mono rounded border border-border-subtle bg-surface-subtle px-1.5 py-0.5 text-[10px]">
          ⌘ K
        </kbd>
      </button>

      {open ? (
        <div
          role="presentation"
          onClick={closeDialog}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-graphite/50 px-4 pt-[12vh] backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search Spine Design System"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-border-default bg-surface shadow-[0_28px_80px_rgba(16,28,32,0.28)]"
          >
            <div className="flex items-center gap-3 border-b border-border-subtle px-4 py-3">
              <Search aria-hidden="true" size={16} className="text-ink-tertiary" />

              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(event) => handleQueryChange(event.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search components, patterns and sections…"
                className="flex-1 bg-transparent text-sm text-ink-primary outline-none placeholder:text-ink-tertiary"
              />

              <button
                type="button"
                onClick={closeDialog}
                aria-label="Close search"
                className="grid size-6 shrink-0 place-items-center rounded text-ink-tertiary hover:bg-surface-subtle hover:text-ink-primary"
              >
                <X aria-hidden="true" size={14} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <p className="px-3 py-6 text-center text-xs text-ink-tertiary">
                  No matches for &ldquo;{query}&rdquo;
                </p>
              ) : (
                grouped.map(([group, entries]) => (
                  <div key={group} className="mb-1 last:mb-0">
                    <p className="px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                      {group}
                    </p>

                    {entries.map((entry) => {
                      flatIndex += 1;
                      const isActive = flatIndex === activeIndex;

                      return (
                        <button
                          key={`${entry.group}-${entry.label}`}
                          type="button"
                          onMouseEnter={() => setActiveIndex(flatIndex)}
                          onClick={() => selectResult(entry.href)}
                          className={`flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                            isActive
                              ? "bg-selected text-action"
                              : "text-ink-primary hover:bg-surface-subtle"
                          }`}
                        >
                          <span className="font-medium">{entry.label}</span>

                          {isActive ? (
                            <CornerDownLeft
                              aria-hidden="true"
                              size={13}
                              className="shrink-0 text-ink-tertiary"
                            />
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            <div className="flex items-center gap-4 border-t border-border-subtle bg-surface-subtle px-4 py-2 text-[10px] text-ink-tertiary">
              <span className="flex items-center gap-1">
                <ArrowUp aria-hidden="true" size={11} />
                <ArrowDown aria-hidden="true" size={11} />
                Navigate
              </span>

              <span className="flex items-center gap-1">
                <CornerDownLeft aria-hidden="true" size={11} />
                Select
              </span>

              <span>Esc Close</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
