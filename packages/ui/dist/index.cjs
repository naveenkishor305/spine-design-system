"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  Button: () => Button,
  ButtonLink: () => ButtonLink,
  CheckboxField: () => CheckboxField,
  IconButton: () => IconButton,
  Panel: () => Panel,
  PanelBody: () => PanelBody,
  PanelHeader: () => PanelHeader,
  SelectField: () => SelectField,
  StatusBadge: () => StatusBadge,
  SystemState: () => SystemState,
  TextField: () => TextField,
  cn: () => cn
});
module.exports = __toCommonJS(index_exports);

// src/cn.ts
function cn(...values) {
  return values.filter(Boolean).join(" ");
}

// src/components/button.tsx
var import_link = __toESM(require("next/link"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "spine-spinner", "aria-hidden": "true" }) : startIcon,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_link.default,
    {
      "data-variant": variant,
      "data-size": size,
      className: cn("spine-button", fullWidth && "w-full", className),
      ...props,
      children: [
        startIcon,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
        endIcon
      ]
    }
  );
}

// src/components/icon-button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function IconButton({
  label,
  icon,
  className,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_lucide_react = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var alertIcons = {
  neutral: import_lucide_react.Info,
  information: import_lucide_react.Info,
  success: import_lucide_react.CheckCircle2,
  warning: import_lucide_react.AlertTriangle,
  error: import_lucide_react.XCircle,
  critical: import_lucide_react.ShieldAlert,
  restricted: import_lucide_react.LockKeyhole
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      className: cn("spine-alert", className),
      "data-tone": tone,
      role: interruptive ? "alert" : "status",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { "aria-hidden": "true", size: 18, className: "spine-alert__icon" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "spine-alert__title", children: title }),
          children ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "spine-alert__message", children }) : null
        ] })
      ]
    }
  );
}

// src/components/panel.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Panel({ elevation = "raised", className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("spine-panel", className), "data-elevation": elevation, ...props });
}
function PanelHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("spine-panel__header", className), ...props });
}
function PanelBody({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("spine-panel__body", className), ...props });
}

// src/components/status-badge.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function StatusBadge({
  tone = "neutral",
  showDot = false,
  icon,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: cn("spine-badge", className), "data-tone": tone, ...props, children: [
    showDot ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "spine-badge__dot", "aria-hidden": "true" }) : null,
    icon,
    children
  ] });
}

// src/components/system-state.tsx
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var stateIcons = {
  loading: import_lucide_react2.CircleDashed,
  empty: import_lucide_react2.SearchX,
  "no-results": import_lucide_react2.SearchX,
  error: import_lucide_react2.XCircle,
  restricted: import_lucide_react2.LockKeyhole,
  critical: import_lucide_react2.ShieldAlert
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    Panel,
    {
      elevation: "flat",
      role: isInterruptive ? "alert" : "status",
      "aria-live": isLoading ? "polite" : void 0,
      className: "h-full",
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(PanelBody, { className: "spine-system-state", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "spine-system-state__icon", "data-kind": kind, children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "spine-spinner", "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, { "aria-hidden": "true", size: 19 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "spine-system-state__title", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "spine-system-state__description", children: description }),
        preserved || nextStep || escalation ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("dl", { className: "spine-system-state__meta", children: [
          preserved ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: "Preserved" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: preserved })
          ] }) : null,
          nextStep ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: "Next action" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: nextStep })
          ] }) : null,
          escalation ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: "Escalation" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: escalation })
          ] }) : null
        ] }) : null,
        action ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "spine-system-state__action", children: action }) : null
      ] })
    }
  );
}

// src/components/text-field.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("spine-field", fieldClassName), children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "spine-field__label", htmlFor: id, children: label }),
    description ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { id: descriptionId, className: "spine-field__description", children: description }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "spine-input-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "input",
        {
          id,
          className: cn("spine-input", className),
          "aria-invalid": error ? true : void 0,
          "aria-describedby": describedBy || void 0,
          ...props
        }
      ),
      endAdornment ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "spine-field__adornment", children: endAdornment }) : null
    ] }),
    error ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { id: errorId, className: "spine-field__message", "data-error": "true", children: error }) : null
  ] });
}

// src/components/select-field.tsx
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: cn("spine-field", fieldClassName), children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { className: "spine-field__label", htmlFor: id, children: label }),
    description ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { id: descriptionId, className: "spine-field__description", children: description }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "spine-select-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react3.ChevronDown, { "aria-hidden": "true", size: 16, className: "spine-select-wrap__icon" })
    ] }),
    error ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { id: errorId, className: "spine-field__message", "data-error": "true", children: error }) : null
  ] });
}

// src/components/checkbox-field.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "label",
      {
        htmlFor: id,
        className: cn("spine-checkbox-field", className),
        "data-error": error ? "true" : void 0,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "spine-checkbox-field__label", children: label }),
            description ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { id: descriptionId, className: "spine-checkbox-field__description", children: description }) : null
          ] })
        ]
      }
    ),
    error ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { id: errorId, className: "spine-checkbox-field__error", children: error }) : null
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.cjs.map