export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  image: string;
  description: string;
  included: string[];
  duration: string;
  idealFor: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  vehicle: string;
  vehicleType: 'Sedan' | 'SUV' | 'Truck' | 'Coupe / Sports Car' | 'Other' | '';
  service: 'Interior Detailing' | 'Exterior Detailing' | 'Full Detail' | 'Ceramic Coating' | 'Not Sure Yet' | '';
  preferredDate: string;
  address: string;
  notes: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'exterior' | 'ceramic' | 'process';
  categoryLabel: string;
  image: string;
  description: string;
}
