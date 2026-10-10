import {
  Brain,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Globe,
  Layers,
  LineChart,
  Palette,
  RefreshCw,
  Shield,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types";
import { cn } from "@/lib/utils";

const icons: Record<IconName, LucideIcon> = {
  code: Code2,
  globe: Globe,
  brain: Brain,
  cloud: Cloud,
  database: Database,
  palette: Palette,
  refresh: RefreshCw,
  compass: Compass,
  cpu: Cpu,
  shield: Shield,
  layers: Layers,
  lineChart: LineChart,
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Glyph = icons[name];
  return <Glyph className={cn("size-5", className)} strokeWidth={1.6} aria-hidden />;
}
