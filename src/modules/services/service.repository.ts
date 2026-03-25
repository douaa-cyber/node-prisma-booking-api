import prisma from "../../config/db";

export const serviceRepository = {
  create(data: { name: string; description: string; price: number }) {
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
    data: { name?: string; description?: string; price?: number },
  ) {
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
