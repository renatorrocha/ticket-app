import { Status } from "@prisma/client";
import { Badge } from "./ui/badge";
import { twMerge } from "tailwind-merge";

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "bg-red-400" | "bg-blue-400" | "bg-green-400" }
> = {
  OPEN: { label: "Open", color: "bg-red-400" },
  STARTED: { label: "Started", color: "bg-blue-400" },
  CLOSED: { label: "Closed", color: "bg-green-400" },
};

export default function TicketStatusBadge({ status }: Props) {
  return (
    <Badge
      className={`${statusMap[status].color} "text-background hover:${statusMap[status].color}`}
    >
      {statusMap[status].label}
    </Badge>
  );
}
