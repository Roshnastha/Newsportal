import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

type Props = {
  name: string; // e.g. "ArrowDown", "Calendar", etc.
} & LucideProps;

export default function NoSSRIcon({ name, ...props }: Props) {
  // Lookup the icon component by name at runtime
  const Icon = (Icons as any)[name];

  if (!Icon) {
    // If icon not found, render nothing (or a fallback)
    return null;
  }

  // Create a no-SSR wrapper for the resolved Icon.
  // Memoize so we don't re-create the dynamic component every render.
  const NoSSR = useMemo(
    () => dynamic(() => Promise.resolve(Icon), { ssr: false }),
    [name]
  );

  return <NoSSR {...props} />;
}