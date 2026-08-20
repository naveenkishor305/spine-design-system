import { ChevronRight } from "lucide-react";
import { useState, type HTMLAttributes } from "react";

import { cn } from "../cn";

export type HierarchyNode = {
  id: string;
  label: string;
  /** e.g. a role, headcount, or type label. */
  meta?: string;
  children?: HierarchyNode[];
};

export type HierarchyTreeProps = HTMLAttributes<HTMLUListElement> & {
  nodes: HierarchyNode[];
  selectedId?: string;
  onSelect?: (id: string) => void;
};

function HierarchyTreeNode({
  node,
  selectedId,
  onSelect,
}: {
  node: HierarchyNode;
  selectedId?: string;
  onSelect?: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = Boolean(node.children?.length);

  return (
    <li className="spine-hierarchy-tree__node">
      <div className="spine-hierarchy-tree__row" data-selected={node.id === selectedId || undefined}>
        {hasChildren ? (
          <button
            type="button"
            className="spine-hierarchy-tree__toggle"
            aria-label={expanded ? "Collapse" : "Expand"}
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            <ChevronRight size={13} className="spine-hierarchy-tree__chevron" />
          </button>
        ) : (
          <span className="spine-hierarchy-tree__spacer" />
        )}

        <button type="button" className="spine-hierarchy-tree__label" onClick={() => onSelect?.(node.id)}>
          {node.label}
          {node.meta ? <span className="spine-hierarchy-tree__meta">{node.meta}</span> : null}
        </button>
      </div>

      {hasChildren && expanded ? (
        <ul className="spine-hierarchy-tree__children">
          {node.children!.map((child) => (
            <HierarchyTreeNode key={child.id} node={child} selectedId={selectedId} onSelect={onSelect} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

/**
 * Expandable org/department/business-unit explorer. Read-only navigation
 * only -- the drag-and-drop restructuring builder (org-chart-builder) is a
 * bespoke canvas-editor feature, not a reusable design-system primitive,
 * and is intentionally out of scope here.
 */
export function HierarchyTree({ nodes, selectedId, onSelect, className, ...props }: HierarchyTreeProps) {
  return (
    <ul className={cn("spine-hierarchy-tree", className)} {...props}>
      {nodes.map((node) => (
        <HierarchyTreeNode key={node.id} node={node} selectedId={selectedId} onSelect={onSelect} />
      ))}
    </ul>
  );
}
