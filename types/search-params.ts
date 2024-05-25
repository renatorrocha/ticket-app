import { Status, Ticket } from "@prisma/client";

export interface SearchParams {
  status: Status;
  page: string;
  orderBy: keyof Ticket;
}
