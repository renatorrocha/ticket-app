import TicketPriority from "@/components/ticket-priority";
import TicketStatusBadge from "@/components/ticket-status-badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ticket, User } from "@prisma/client";
import Link from "next/link";
import ReactMarkDown from "react-markdown";
import DeleteButton from "./delete-button";
import AssignTicket from "@/components/assign-ticket";

interface Props {
  ticket: Ticket;
  users: User[];
}

export default function TicketDetail({ ticket, users }: Props) {
  return (
    <div className="lg:grid lg:grid-cols-4">
      <Card className="mx-4 mb-4 lg:col-span-3 lg:mr-4">
        <CardHeader>
          <div className="flex justify-between mb-3">
            <TicketStatusBadge status={ticket.status} />

            <TicketPriority priority={ticket.priority} />
          </div>

          <CardTitle>{ticket.title}</CardTitle>

          <CardDescription>
            Created:{" "}
            {ticket.createdAt.toLocaleDateString("en-US", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </CardDescription>
        </CardHeader>

        <CardContent className="prose dark:prose-invert">
          <ReactMarkDown>{ticket.description}</ReactMarkDown>
        </CardContent>

        <CardFooter>
          Updated:{" "}
          {ticket.updatedAt.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </CardFooter>
      </Card>

      <div className="mx-4 flex lg:flex-col lg:mx-0 gap-2">
        <AssignTicket ticket={ticket} users={users} />

        <Link
          href={`/tickets/edit/${ticket.id}`}
          className={`${buttonVariants({ variant: "secondary" })}`}
        >
          Edit Ticket
        </Link>

        <DeleteButton ticketId={ticket.id} />
      </div>
    </div>
  );
}
