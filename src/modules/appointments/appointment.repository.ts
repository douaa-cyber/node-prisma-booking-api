import prisma from "../../config/db";
import { Prisma } from "../../generated/prisma/client"; // path to your generated client

export const appointmentRepository = {
  create(data: Prisma.AppointmentCreateInput) {
    return prisma.appointment.create({
      data,
      include: {
        user: true,
        customer: true,
        service: true,
      },
    });
  },
  findAll() {
    return prisma.appointment.findMany({
      orderBy: { date: "desc" },
      include: {
        user: true,
        customer: true,
        service: true,
      },
    });
  },
  findById(id: number) {
    return prisma.appointment.findUnique({
      where: { id },
      include: {
        user: true,
        customer: true,
        service: true,
      },
    });
  },
  update(id: number, data: Prisma.AppointmentUpdateInput) {
    return prisma.appointment.update({
      where: { id },
      data,
      include: {
        user: true,
        customer: true,
        service: true,
      },
    });
  },
};
