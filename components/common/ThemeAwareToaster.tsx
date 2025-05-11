"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Toaster } from "sonner";

export default function ThemeAwareToaster() {
  const { resolvedTheme } = useTheme();
  return (
    <div>
      <Toaster
        richColors
        position="top-right"
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}
