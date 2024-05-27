import options from "@/app/api/auth/[...nextauth]/options";
import UserForm from "@/components/user-form";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth/next";

interface Props {
  params: { id: string };
}

export default async function EditUser({ params }: Props) {
  const session = await getServerSession(options);

  if (session?.user.role !== "ADMIN") {
    return <p className="text-destructive">Admin access required.</p>;
  }

  const user = await prisma?.user.findUnique({
    where: { id: parseInt(params.id) },
    // select: {
    //   id: true,
    //   name: true,
    //   username: true,
    //   role: true,
    // },
  });

  if (!user) {
    return <p className="text-destructive">User Not Found.</p>;
  }

  user.password = "";
  return <UserForm user={user} />;
}
