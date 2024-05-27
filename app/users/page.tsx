import UserForm from "@/components/user-form";
import DataTableSimple from "./data-table";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth/next";
import options from "../api/auth/[...nextauth]/options";

export default async function UsersPage() {
  const session = await getServerSession(options);

  if (session?.user.role !== "ADMIN") {
    return <p className="text-destructive">Admin access required.</p>;
  }

  const users = await prisma?.user.findMany();

  return (
    <div>
      <UserForm />

      <DataTableSimple users={users} />
    </div>
  );
}
