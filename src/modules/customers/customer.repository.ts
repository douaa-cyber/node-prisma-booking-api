import prisma from "../../config/db";
import { Prisma } from "../../generated/prisma/client"; // path to your generated client

export const customerRepository = {
  create(data: Prisma.CustomerCreateInput) {
    return prisma.customer.create({ data });
  },

  findAll() {
    return prisma.customer.findMany({
      orderBy: { id: "desc" },
    });
  },

  findById(id: number) {
    return prisma.customer.findUnique({
      where: { id },
    });
  },

  update(id: number, data: Prisma.CustomerUpdateInput) {
    return prisma.customer.update({
      where: { id },
      data,
    });
  },

  delete(id: number) {
    return prisma.customer.delete({
      where: { id },
    });
  },
};
