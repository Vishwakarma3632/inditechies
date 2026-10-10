import { services } from "@/data/services";

export const serviceInterestOptions = [
  "Not sure yet",
  ...services.map((service) => service.title),
];
