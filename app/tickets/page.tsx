import prisma from "@/prisma/db";
import DataTable from "./data-table";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function TicketsPage() {
  const tickets = await prisma.ticket.findMany();

  console.log(tickets);

  return (
    <div>
      <Link
        href="/tickets/new"
        className={buttonVariants({ variant: "default" })}
      >
        New Ticket
      </Link>

      <DataTable tickets={tickets} />
    </div>
  );
}
