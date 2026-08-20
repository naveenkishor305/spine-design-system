import type { InputHTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";

export type CheckboxFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  error?: string;
};

export function CheckboxField({
  id,
  label,
  description,
  error,
  className,
  ...props
}: CheckboxFieldProps) {
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ");

  return (
    <div>
      <label
        htmlFor={id}
        className={cn("spine-checkbox-field", className)}
        data-error={error ? "true" : undefined}
      >
        <input
          id={id}
          type="checkbox"
          className="spine-checkbox-field__input"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
          {...props}
        />
        <span className="min-w-0">
          <span className="spine-checkbox-field__label">{label}</span>
          {description ? (
            <span id={descriptionId} className="spine-checkbox-field__description">
              {description}
            </span>
          ) : null}
        </span>
      </label>
      {error ? (
        <p id={errorId} className="spine-checkbox-field__error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
