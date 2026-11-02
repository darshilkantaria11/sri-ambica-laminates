"use client";

import Link from "next/link";
import { ArrowRight } from "./Icons";

const variants = {
  primary: { base: "bg-ink text-ivory", fill: "bg-brand-blue", hover: "" },
  amber: { base: "bg-brand-amber text-ink", fill: "bg-ink", hover: "group-hover:text-ivory" },
  ghost: {
    base: "border border-ink/15 bg-transparent text-ink",
    fill: "bg-ink",
    hover: "group-hover:text-ivory",
  },
  whatsapp: { base: "bg-[#1E9E52] text-white", fill: "bg-ink", hover: "" },
  outlineLight: {
    base: "border border-ivory/30 bg-transparent text-ivory",
    fill: "bg-ivory",
    hover: "group-hover:text-ink",
  },
  light: { base: "bg-ivory text-ink", fill: "bg-brand-amber", hover: "" },
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-4 text-[15px]",
  lg: "px-9 py-5 text-base",
};

/**
 * Pill button with a liquid fill on hover.
 * Renders <Link> for internal routes, <a> for external/tel/mailto, <button> otherwise.
 */
export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  type = "button",
  children,
  ...rest
}) {
  const v = variants[variant] || variants.primary;
  const cls = `group relative inline-flex items-center justify-center overflow-hidden rounded-full ${sizes[size]} ${v.base} ${className}`;

  const inner = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 translate-y-[102%] rounded-[inherit] ${v.fill} transition-transform duration-500 ease-expo group-hover:translate-y-0`}
      />
      <span
        className={`relative z-10 inline-flex items-center gap-2.5 font-semibold tracking-tight transition-colors duration-300 ${v.hover}`}
      >
        {children}
        {icon && (
          <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  if (href) {
    const external = /^(https?:|tel:|mailto:)/.test(href);
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...rest}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {inner}
    </button>
  );
}
