import prisma from "@/prisma/db";
import DataTable from "./data-table";

export default async function TicketsPage() {
  const tickets = await prisma.ticket.findMany();

  console.log(tickets);

  return (
    <div>
      <DataTable tickets={tickets} />
    </div>
  );
}
