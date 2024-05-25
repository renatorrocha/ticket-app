import prisma from "@/prisma/db";
import DataTable from "./data-table";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/pagination";

interface SearchParams {
  page: string;
}

export default async function TicketsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const pageSize = 10;
  const page = parseInt(searchParams.page) || 1;
  const ticketCount = await prisma.ticket.count();

  const tickets = await prisma.ticket.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

  return (
    <div>
      <Link
        href="/tickets/new"
        className={buttonVariants({ variant: "default" })}
      >
        New Ticket
      </Link>

      <DataTable tickets={tickets} />
      <Pagination
        itemCount={ticketCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  );
}
