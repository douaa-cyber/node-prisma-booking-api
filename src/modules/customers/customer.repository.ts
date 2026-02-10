import prisma from "../../config/db";

export const customerRepository = {
  create(data: { name: string; phone: string }) {
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

  update(id: number, data: { name?: string; phone?: string }) {
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
