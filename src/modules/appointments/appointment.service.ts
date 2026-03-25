import { appointmentRepository } from "./appointment.repository";
import { AppError } from "../../common/errors/AppError";
import { Prisma } from "../../generated/prisma/client";

interface CreateAppointmentDTO {
  date: Date;
  userId: number;
  customerId: number;
  serviceId: number;
}

export const appointmentService = {
  async createAppointment(data: CreateAppointmentDTO) {
    if (!data.date || !data.userId || !data.customerId || !data.serviceId) {
      throw new AppError("Missing required fields", 400);
    }

    const prismaData: Prisma.AppointmentCreateInput = {
      date: data.date,
      user: { connect: { id: data.userId } },
      customer: { connect: { id: data.customerId } },
      service: { connect: { id: data.serviceId } },
    };

    return appointmentRepository.create(prismaData);
  },

  async getAppointments() {
    return appointmentRepository.findAll();
  },
  async getAppointment(id: number) {
    const appointment = await appointmentRepository.findById(id);
    if (!appointment) throw new AppError("Appointment not found", 404);
    return appointment;
  },
  async updateAppointment(id: number, data: Prisma.AppointmentUpdateInput) {
    const appointment = await appointmentRepository.findById(id);
    if (!appointment) throw new AppError("Appointment not found", 404);
    return appointmentRepository.update(id, data);
  },
};
