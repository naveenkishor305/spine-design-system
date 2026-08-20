import type { TableHTMLAttributes } from "react";

import { cn } from "../cn";

export type ComparisonCriterion = {
  id: string;
  label: string;
  /** e.g. 0.3 for a 30% weight. */
  weight?: number;
};

export type ComparisonCandidate = {
  id: string;
  name: string;
  /** Criterion id -> score. */
  scores: Record<string, number>;
  recommended?: boolean;
};

export type SupplierComparisonMatrixProps = TableHTMLAttributes<HTMLTableElement> & {
  criteria: ComparisonCriterion[];
  candidates: ComparisonCandidate[];
};

/** Weighted criteria x candidate scoring grid -- RFx evaluation, supplier selection. */
export function SupplierComparisonMatrix({
  criteria,
  candidates,
  className,
  ...props
}: SupplierComparisonMatrixProps) {
  return (
    <table className={cn("spine-comparison-matrix", className)} {...props}>
      <thead>
        <tr>
          <th scope="col" />
          {candidates.map((candidate) => (
            <th key={candidate.id} scope="col" data-recommended={candidate.recommended || undefined}>
              {candidate.name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {criteria.map((criterion) => (
          <tr key={criterion.id}>
            <th scope="row">
              {criterion.label}
              {criterion.weight !== undefined ? ` (${Math.round(criterion.weight * 100)}%)` : ""}
            </th>
            {candidates.map((candidate) => (
              <td key={candidate.id} data-recommended={candidate.recommended || undefined}>
                {candidate.scores[criterion.id] ?? "—"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
