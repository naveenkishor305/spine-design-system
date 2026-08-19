// src/cn.ts
function cn(...values) {
  return values.filter(Boolean).join(" ");
}

// src/components/button.tsx
import Link from "next/link";
import { jsx, jsxs } from "react/jsx-runtime";
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  startIcon,
  endIcon,
  className,
  children,
  disabled,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type,
      "data-variant": variant,
      "data-size": size,
      "aria-busy": loading || void 0,
      disabled: disabled || loading,
      className: cn("spine-button", fullWidth && "w-full", className),
      ...props,
      children: [
        loading ? /* @__PURE__ */ jsx("span", { className: "spine-spinner", "aria-hidden": "true" }) : startIcon,
        /* @__PURE__ */ jsx("span", { children }),
        !loading ? endIcon : null
      ]
    }
  );
}
function ButtonLink({
  variant = "primary",
  size = "md",
  fullWidth = false,
  startIcon,
  endIcon,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      "data-variant": variant,
      "data-size": size,
      className: cn("spine-button", fullWidth && "w-full", className),
      ...props,
      children: [
        startIcon,
        /* @__PURE__ */ jsx("span", { children }),
        endIcon
      ]
    }
  );
}

// src/components/icon-button.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function IconButton({
  label,
  icon,
  className,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    "button",
    {
      type,
      "aria-label": label,
      title: label,
      className: cn("spine-icon-button", className),
      ...props,
      children: icon
    }
  );
}

// src/components/alert.tsx
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  LockKeyhole,
  ShieldAlert,
  XCircle
} from "lucide-react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var alertIcons = {
  neutral: Info,
  information: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
  critical: ShieldAlert,
  restricted: LockKeyhole
};
function Alert({
  tone = "information",
  title,
  children,
  className,
  ...props
}) {
  const Icon = alertIcons[tone];
  const interruptive = tone === "critical" || tone === "error";
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: cn("spine-alert", className),
      "data-tone": tone,
      role: interruptive ? "alert" : "status",
      ...props,
      children: [
        /* @__PURE__ */ jsx3(Icon, { "aria-hidden": "true", size: 18, className: "spine-alert__icon" }),
        /* @__PURE__ */ jsxs2("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx3("div", { className: "spine-alert__title", children: title }),
          children ? /* @__PURE__ */ jsx3("div", { className: "spine-alert__message", children }) : null
        ] })
      ]
    }
  );
}

// src/components/panel.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Panel({ elevation = "raised", className, ...props }) {
  return /* @__PURE__ */ jsx4("div", { className: cn("spine-panel", className), "data-elevation": elevation, ...props });
}
function PanelHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx4("div", { className: cn("spine-panel__header", className), ...props });
}
function PanelBody({ className, ...props }) {
  return /* @__PURE__ */ jsx4("div", { className: cn("spine-panel__body", className), ...props });
}

// src/components/status-badge.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function StatusBadge({
  tone = "neutral",
  showDot = false,
  icon,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs3("span", { className: cn("spine-badge", className), "data-tone": tone, ...props, children: [
    showDot ? /* @__PURE__ */ jsx5("span", { className: "spine-badge__dot", "aria-hidden": "true" }) : null,
    icon,
    children
  ] });
}

// src/components/system-state.tsx
import {
  CircleDashed,
  LockKeyhole as LockKeyhole2,
  SearchX,
  ShieldAlert as ShieldAlert2,
  XCircle as XCircle2
} from "lucide-react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var stateIcons = {
  loading: CircleDashed,
  empty: SearchX,
  "no-results": SearchX,
  error: XCircle2,
  restricted: LockKeyhole2,
  critical: ShieldAlert2
};
function SystemState({
  kind,
  title,
  description,
  preserved,
  nextStep,
  escalation,
  action
}) {
  const Icon = stateIcons[kind];
  const isLoading = kind === "loading";
  const isInterruptive = kind === "error" || kind === "critical";
  return /* @__PURE__ */ jsx6(
    Panel,
    {
      elevation: "flat",
      role: isInterruptive ? "alert" : "status",
      "aria-live": isLoading ? "polite" : void 0,
      className: "h-full",
      children: /* @__PURE__ */ jsxs4(PanelBody, { className: "spine-system-state", children: [
        /* @__PURE__ */ jsx6("span", { className: "spine-system-state__icon", "data-kind": kind, children: isLoading ? /* @__PURE__ */ jsx6("span", { className: "spine-spinner", "aria-hidden": "true" }) : /* @__PURE__ */ jsx6(Icon, { "aria-hidden": "true", size: 19 }) }),
        /* @__PURE__ */ jsx6("h3", { className: "spine-system-state__title", children: title }),
        /* @__PURE__ */ jsx6("p", { className: "spine-system-state__description", children: description }),
        preserved || nextStep || escalation ? /* @__PURE__ */ jsxs4("dl", { className: "spine-system-state__meta", children: [
          preserved ? /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx6("dt", { children: "Preserved" }),
            /* @__PURE__ */ jsx6("dd", { children: preserved })
          ] }) : null,
          nextStep ? /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx6("dt", { children: "Next action" }),
            /* @__PURE__ */ jsx6("dd", { children: nextStep })
          ] }) : null,
          escalation ? /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx6("dt", { children: "Escalation" }),
            /* @__PURE__ */ jsx6("dd", { children: escalation })
          ] }) : null
        ] }) : null,
        action ? /* @__PURE__ */ jsx6("div", { className: "spine-system-state__action", children: action }) : null
      ] })
    }
  );
}

// src/components/text-field.tsx
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
function TextField({
  id,
  label,
  description,
  error,
  endAdornment,
  className,
  fieldClassName,
  ...props
}) {
  const descriptionId = description ? `${id}-description` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs5("div", { className: cn("spine-field", fieldClassName), children: [
    /* @__PURE__ */ jsx7("label", { className: "spine-field__label", htmlFor: id, children: label }),
    description ? /* @__PURE__ */ jsx7("p", { id: descriptionId, className: "spine-field__description", children: description }) : null,
    /* @__PURE__ */ jsxs5("div", { className: "spine-input-wrap", children: [
      /* @__PURE__ */ jsx7(
        "input",
        {
          id,
          className: cn("spine-input", className),
          "aria-invalid": error ? true : void 0,
          "aria-describedby": describedBy || void 0,
          ...props
        }
      ),
      endAdornment ? /* @__PURE__ */ jsx7("span", { className: "spine-field__adornment", children: endAdornment }) : null
    ] }),
    error ? /* @__PURE__ */ jsx7("p", { id: errorId, className: "spine-field__message", "data-error": "true", children: error }) : null
  ] });
}

// src/components/select-field.tsx
import { ChevronDown } from "lucide-react";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
function SelectField({
  id,
  label,
  description,
  error,
  className,
  fieldClassName,
  children,
  ...props
}) {
  const descriptionId = description ? `${id}-description` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs6("div", { className: cn("spine-field", fieldClassName), children: [
    /* @__PURE__ */ jsx8("label", { className: "spine-field__label", htmlFor: id, children: label }),
    description ? /* @__PURE__ */ jsx8("p", { id: descriptionId, className: "spine-field__description", children: description }) : null,
    /* @__PURE__ */ jsxs6("div", { className: "spine-select-wrap", children: [
      /* @__PURE__ */ jsx8(
        "select",
        {
          id,
          className: cn("spine-select", className),
          "aria-invalid": error ? true : void 0,
          "aria-describedby": describedBy || void 0,
          ...props,
          children
        }
      ),
      /* @__PURE__ */ jsx8(ChevronDown, { "aria-hidden": "true", size: 16, className: "spine-select-wrap__icon" })
    ] }),
    error ? /* @__PURE__ */ jsx8("p", { id: errorId, className: "spine-field__message", "data-error": "true", children: error }) : null
  ] });
}

// src/components/checkbox-field.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
function CheckboxField({
  id,
  label,
  description,
  error,
  className,
  ...props
}) {
  const descriptionId = description ? `${id}-description` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs7("div", { children: [
    /* @__PURE__ */ jsxs7(
      "label",
      {
        htmlFor: id,
        className: cn("spine-checkbox-field", className),
        "data-error": error ? "true" : void 0,
        children: [
          /* @__PURE__ */ jsx9(
            "input",
            {
              id,
              type: "checkbox",
              className: "spine-checkbox-field__input",
              "aria-invalid": error ? true : void 0,
              "aria-describedby": describedBy || void 0,
              ...props
            }
          ),
          /* @__PURE__ */ jsxs7("span", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx9("span", { className: "spine-checkbox-field__label", children: label }),
            description ? /* @__PURE__ */ jsx9("span", { id: descriptionId, className: "spine-checkbox-field__description", children: description }) : null
          ] })
        ]
      }
    ),
    error ? /* @__PURE__ */ jsx9("p", { id: errorId, className: "spine-checkbox-field__error", children: error }) : null
  ] });
}
export {
  Alert,
  Button,
  ButtonLink,
  CheckboxField,
  IconButton,
  Panel,
  PanelBody,
  PanelHeader,
  SelectField,
  StatusBadge,
  SystemState,
  TextField,
  cn
};
//# sourceMappingURL=index.js.map