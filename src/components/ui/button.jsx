import React from "react";
import { cn } from "@/lib/utils.js";

const variants = {
  default: "bg-primary text-white shadow-subtle hover:bg-primary-dark transition-colors",
  outline: "border border-border bg-card shadow-subtle hover:bg-muted text-foreground transition-colors",
  ghost: "hover:bg-muted text-foreground transition-colors",
  secondary: "bg-secondary text-secondary-foreground shadow-subtle hover:bg-muted transition-colors",
};

const sizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-11 rounded-md px-8",
  icon: "h-9 w-9",
};

export const Button = React.forwardRef(function Button(
  { className, variant = "default", size = "default", asChild = false, children, ...props },
  ref,
) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    variants[variant],
    sizes[size],
    className,
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
      ref,
      ...props,
    });
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});
