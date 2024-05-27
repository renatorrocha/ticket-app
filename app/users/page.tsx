import UserForm from "@/components/user-form";
import DataTableSimple from "./data-table";
import prisma from "@/prisma/db";

export default async function UsersPage() {
  const users = await prisma?.user.findMany();

  return (
    <div>
      <UserForm />

      <DataTableSimple users={users} />
    </div>
  );
}
