import prisma from "@/prisma/db";
import DataTable from "./data-table";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/pagination";
import StatusFilter from "@/components/status-filter";
import { Status } from "@prisma/client";
import { SearchParams } from "@/types/search-params";

export default async function TicketsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const pageSize = 10;
  const page = parseInt(searchParams.page) || 1;

  const statuses = Object.values(Status);

  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  let where = {};

  if (status) {
    where = {
      status,
    };
  } else {
    where = {
      NOT: [{ status: "CLOSED" as Status }],
    };
  }

  const ticketCount = await prisma.ticket.count({ where });

  const tickets = await prisma.ticket.findMany({
    where,
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

  return (
    <div>
      <div className="flex gap-2">
        <Link
          href="/tickets/new"
          className={buttonVariants({ variant: "default" })}
        >
          New Ticket
        </Link>

        <StatusFilter />
      </div>

      <DataTable tickets={tickets} searchParams={searchParams} />

      <Pagination
        itemCount={ticketCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  );
}
