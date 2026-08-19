import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, ComponentProps, HTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import Link from 'next/link';

type ClassValue = string | false | null | undefined;
declare function cn(...values: ClassValue[]): string;

type ButtonVariant = "primary" | "secondary" | "tertiary" | "critical";
type ButtonSize = "sm" | "md" | "lg";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    loading?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
};
/**
 * ButtonLink requires Next.js (uses next/link). Apps not on Next.js
 * should render a plain anchor styled with the "spine-button" class.
 */
type ButtonLinkProps = ComponentProps<typeof Link> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
};
declare function Button({ variant, size, fullWidth, loading, startIcon, endIcon, className, children, disabled, type, ...props }: ButtonProps): react.JSX.Element;
declare function ButtonLink({ variant, size, fullWidth, startIcon, endIcon, className, children, ...props }: ButtonLinkProps): react.JSX.Element;

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label" | "children"> & {
    label: string;
    icon: ReactNode;
};
declare function IconButton({ label, icon, className, type, ...props }: IconButtonProps): react.JSX.Element;

type StatusTone = "neutral" | "information" | "success" | "warning" | "error" | "critical" | "restricted";
type StatusBadgeProps = HTMLAttributes<HTMLSpanElement> & {
    tone?: StatusTone;
    showDot?: boolean;
    icon?: ReactNode;
};
declare function StatusBadge({ tone, showDot, icon, className, children, ...props }: StatusBadgeProps): react.JSX.Element;

type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
    tone?: StatusTone;
    title: ReactNode;
};
declare function Alert({ tone, title, children, className, ...props }: AlertProps): react.JSX.Element;

type PanelProps = HTMLAttributes<HTMLDivElement> & {
    elevation?: "raised" | "flat";
};
declare function Panel({ elevation, className, ...props }: PanelProps): react.JSX.Element;
declare function PanelHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): react.JSX.Element;
declare function PanelBody({ className, ...props }: HTMLAttributes<HTMLDivElement>): react.JSX.Element;

type SystemStateKind = "loading" | "empty" | "no-results" | "error" | "restricted" | "critical";
type SystemStateProps = {
    kind: SystemStateKind;
    title: string;
    description: string;
    preserved?: string;
    nextStep?: string;
    escalation?: string;
    action?: ReactNode;
};
declare function SystemState({ kind, title, description, preserved, nextStep, escalation, action, }: SystemStateProps): react.JSX.Element;

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    id: string;
    label: string;
    description?: string;
    error?: string;
    endAdornment?: ReactNode;
    fieldClassName?: string;
};
declare function TextField({ id, label, description, error, endAdornment, className, fieldClassName, ...props }: TextFieldProps): react.JSX.Element;

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
    id: string;
    label: string;
    description?: string;
    error?: string;
    fieldClassName?: string;
};
declare function SelectField({ id, label, description, error, className, fieldClassName, children, ...props }: SelectFieldProps): react.JSX.Element;

type CheckboxFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    id: string;
    label: ReactNode;
    description?: ReactNode;
    error?: string;
};
declare function CheckboxField({ id, label, description, error, className, ...props }: CheckboxFieldProps): react.JSX.Element;

export { Alert, type AlertProps, Button, ButtonLink, type ButtonLinkProps, type ButtonProps, type ButtonSize, type ButtonVariant, CheckboxField, type CheckboxFieldProps, type ClassValue, IconButton, type IconButtonProps, Panel, PanelBody, PanelHeader, type PanelProps, SelectField, type SelectFieldProps, StatusBadge, type StatusBadgeProps, type StatusTone, SystemState, type SystemStateKind, type SystemStateProps, TextField, type TextFieldProps, cn };
