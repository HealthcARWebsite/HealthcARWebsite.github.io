// import { HealthcareServices } from "./healthcare-services.enum";

export interface HealthcareProvider {
  name: string;
  description: string;
  url: string;
  zipCode: string;
  hostname?: string;
  // services: HealthcareServices[];
  // TODO: implement services property with ProviderList
}
