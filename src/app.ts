import express from "express";
//import routes from "./routes";
import { errorHandler } from "./common/middleware/error.middleware";
import { notFound } from "./common/middleware/notFound.middleware";
import userRoutes from "./modules/users/user.routes";
import serviceRoutes from "./modules/services/service.routes";
import appointmentRoutes from "./modules/appointments/appointment.routes";
import customerRoutes from "./modules/customers/customer.routes";
const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/customers", customerRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
