import DashChart from "@/components/dash-chart";
import DashRecentTickets from "@/components/dash-recent-tickets";
import prisma from "@/prisma/db";

export default async function Dashboard() {
  const tickets = await prisma.ticket.findMany({
    where: {
      NOT: [{ status: "CLOSED" }],
    },
    orderBy: {
      updatedAt: "desc",
    },
    skip: 0,
    take: 5,
    include: {
      assignedToUser: true,
    },
  });

  const groupTicket = await prisma.ticket.groupBy({
    by: ["status"],
    _count: {
      id: true,
    },
  });

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 px-2">
        <div className="">
          <DashRecentTickets tickets={tickets} />
        </div>

        <div className="">
          <DashChart />
        </div>
      </div>
    </div>
  );
}
