import {
  Code,
  PenLine,
  Clapperboard,
  Sparkles,
  Palette,
  Film,
  Megaphone,
  MapPin,
  Phone,
  Mail,
  Lightbulb,
  Target,
  type LucideIcon,
} from "lucide-react";

/** Maps the string icon names stored in content data to lucide components. */
export const ICONS: Record<string, LucideIcon> = {
  Code,
  PenLine,
  Clapperboard,
  Sparkles,
  Palette,
  Film,
  Megaphone,
  MapPin,
  Phone,
  Mail,
  Lightbulb,
  Target,
};

export type IconName = keyof typeof ICONS;
