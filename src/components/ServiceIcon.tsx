import { Building2, FileSignature, Gavel, Handshake, Home, Landmark, ShieldCheck, Users } from "lucide-react";
import type { Service } from "@/data/content";

const ICON_MAP: Record<Service["icon"], typeof Building2> = {
  corporate: Building2,
  civil: Gavel,
  family: Users,
  criminal: ShieldCheck,
  property: Home,
  documentation: FileSignature,
  banking: Landmark,
  arbitration: Handshake,
};

export default function ServiceIcon({
  icon,
  size = 22,
  className,
}: {
  icon: Service["icon"];
  size?: number;
  className?: string;
}) {
  const Icon = ICON_MAP[icon];
  return <Icon size={size} className={className} />;
}
