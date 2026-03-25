import prisma from "../../config/db";

import { Prisma } from "../../generated/prisma/client"; // path to your generated client

export const serviceRepository = {
  create(data: Prisma.ServiceCreateInput) {
    return prisma.service.create({ data });
  },

  findAll() {
    return prisma.service.findMany({
      orderBy: { name: "asc" },
    });
  },

  findById(id: number) {
    return prisma.service.findUnique({
      where: { id },
    });
  },

  update(
    id: number,
    data:Prisma.ServiceUpdateInput ) {
    return prisma.service.update({
      where: { id },
      data,
    });
  },

  delete(id: number) {
    return prisma.service.delete({
      where: { id },
    });
  },
};
