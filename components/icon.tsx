import {
  ArrowRight,
  LayoutDashboard,
  Video,
  Film,
  PenLine,
  PanelTop,
  LayoutGrid,
  Zap,
  Shuffle,
  TrendingDown,
  Truck,
  Users,
  CreditCard,
  MapPin,
  Search,
  Plane,
  Package,
  DollarSign,
  Layers,
  Activity,
  Check,
  Globe,
  MessageCircle,
  X,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight,
  "layout-dashboard": LayoutDashboard,
  video: Video,
  film: Film,
  "pen-line": PenLine,
  "panel-top": PanelTop,
  "layout-grid": LayoutGrid,
  zap: Zap,
  shuffle: Shuffle,
  "trending-down": TrendingDown,
  truck: Truck,
  users: Users,
  "credit-card": CreditCard,
  "map-pin": MapPin,
  search: Search,
  plane: Plane,
  package: Package,
  "dollar-sign": DollarSign,
  layers: Layers,
  activity: Activity,
  check: Check,
  globe: Globe,
  "message-circle": MessageCircle,
  x: X,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
  "aria-hidden"?: boolean;
}

export function Icon({ name, className, size, strokeWidth = 1.8, ...rest }: IconProps) {
  const LucideIco = map[name];
  if (!LucideIco) return null;
  return (
    <LucideIco
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={rest["aria-hidden"] ?? true}
    />
  );
}
