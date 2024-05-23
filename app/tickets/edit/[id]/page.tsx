import dynamic from "next/dynamic";

interface Props {
  params: { id: string };
}

const TicketForm = dynamic(() => import("@/components/ticket-form"), {
  ssr: false,
});

export default async function EditTicketPage({ params }: Props) {
  const ticket = await prisma?.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return <p className="text-destructive">Ticket not found</p>;
  }

  return <TicketForm ticket={ticket} />;
}
