import prisma from "@/prisma/db";
import TicketDetail from "./ticket-detail";

interface Props {
  params: { id: string };
}

export default async function ViewTicketPage({ params }: Props) {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return <p className="text-destructive">Ticket Not Found!</p>;
  }

  return <TicketDetail ticket={ticket} />;
}
