
"use client";

import dynamic from "next/dynamic";

const LucideIcon = dynamic(() => import("lucide-react").then((mod) => mod.YourIcon), {
  ssr: false,
});

export default LucideIcon;
