"use client";

import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
    children,
    ...props
}: {
    children: ReactNode;
    attribute?: "class" | "data-theme" | "data-mode";
    defaultTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
}) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
