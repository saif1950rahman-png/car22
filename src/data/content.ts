import { ServiceItem, GalleryItem } from '../types';
import heroImg from '../assets/images/hero_bmw_m4_competition_1794073707513.jpg';
import interiorImg from '../assets/images/interior_mercedes_s_class_1794073708510.jpg';
import exteriorImg from '../assets/images/exterior_mercedes_amg_gt_1794073708626.jpg';
import fullDetailImg from '../assets/images/full_detail_bmw_m5_1794073709512.jpg';
import ceramicImg from '../assets/images/ceramic_coating_mercedes_hood_1794073709679.jpg';
import polishingImg from '../assets/images/detailer_polishing_bmw_m4_1794073711234.jpg';
import ctaSunsetImg from '../assets/images/cta_mercedes_amg_gt_sunset_1794073711087.jpg';

export const IMAGES = {
  hero: heroImg,
  interior: interiorImg,
  exterior: exteriorImg,
  fullDetail: fullDetailImg,
  ceramic: ceramicImg,
  polishing: polishingImg,
  ctaSunset: ctaSunsetImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'interior-detailing',
    number: '01',
    title: 'Interior Detailing',
    image: IMAGES.interior,
    description: 'Get back into a clean and fresh cabin. We clean seats, carpets, dashboards, and those hard-to-reach spots that often get missed.',
    included: [
      'Deep vacuuming',
      'Seat and carpet cleaning',
      'Leather cleaning',
      'Dashboard and surface cleaning',
      'Interior glass cleaning',
    ],
    duration: '2.5 – 3.5 Hours',
    idealFor: 'Restoring everyday cabins, pet hair removal, and leather conditioning for luxury interiors.',
  },
  {
    id: 'exterior-detailing',
    number: '02',
    title: 'Exterior Detailing',
    image: IMAGES.exterior,
    description: 'Give your car a proper clean and bring out its shine with careful washing and exterior care.',
    included: [
      'Hand wash',
      'Wheel and tire cleaning',
      'Paint-safe drying',
      'Exterior glass cleaning',
      'Final finish treatment',
    ],
    duration: '2.0 – 3.0 Hours',
    idealFor: 'Removing road grime, brake dust buildup, and enhancing deep paint gloss with safe wash techniques.',
  },
  {
    id: 'full-detail',
    number: '03',
    title: 'Full Detail',
    image: IMAGES.fullDetail,
    description: 'Give your car the complete refresh. We take care of both the inside and outside, leaving it looking and feeling fresh.',
    included: [
      'Interior deep cleaning',
      'Exterior hand wash',
      'Wheel and tire care',
      'Interior surface cleaning',
      'Final finishing touches',
    ],
    duration: '4.0 – 5.5 Hours',
    idealFor: 'The complete seasonal transformation or preparing your vehicle for resale and special events.',
  },
  {
    id: 'ceramic-coating',
    number: '04',
    title: 'Ceramic Coating',
    image: IMAGES.ceramic,
    description: 'Give your paint extra protection and a beautiful glossy finish with professional ceramic coating.',
    included: [
      'Paint preparation',
      'Surface cleaning',
      'Coating application',
      'Water-repelling finish',
      'Final inspection',
    ],
    duration: '6.0 – 8.0 Hours (or Multi-Day Curing)',
    idealFor: 'Long-term paint defense against UV oxidation, acid rain, bird droppings, and microscopic scratches.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Mercedes-Benz S-Class Cabin',
    category: 'interior',
    categoryLabel: 'Interior Detailing',
    image: IMAGES.interior,
    description: 'Deep leather conditioning and matte dashboard finishing on premium diamond-stitched upholstery.',
  },
  {
    id: 'g-2',
    title: 'Dark Metallic Mercedes-AMG GT',
    category: 'exterior',
    categoryLabel: 'Exterior Detailing',
    image: IMAGES.exterior,
    description: 'Decontamination wash, high-gloss paint correction, and wheel barrel brake-dust removal.',
  },
  {
    id: 'g-3',
    title: 'Deep Blue BMW M5 Competition',
    category: 'exterior',
    categoryLabel: 'Full Detail',
    image: IMAGES.fullDetail,
    description: 'Comprehensive exterior multi-stage wash and full interior deep revitalization.',
  },
  {
    id: 'g-4',
    title: 'Hydrophobic Ceramic Shield',
    category: 'ceramic',
    categoryLabel: 'Ceramic Coating',
    image: IMAGES.ceramic,
    description: 'High-contact surface ceramic coating displaying extreme water beading and mirror reflections.',
  },
  {
    id: 'g-5',
    title: 'Precision Dual-Action Paint Correction',
    category: 'process',
    categoryLabel: 'Our Process',
    image: IMAGES.polishing,
    description: 'Controlled swirl removal and micro-marring correction under targeted LED inspection arrays.',
  },
  {
    id: 'g-6',
    title: 'Golden Hour Driveway Finish',
    category: 'exterior',
    categoryLabel: 'Mobile Hand Delivery',
    image: IMAGES.ctaSunset,
    description: 'The completed exterior showcase right at the client’s private residence.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Choose Your Service',
    description: 'Pick the detailing service that works best for your car.',
  },
  {
    number: '02',
    title: 'Book Your Appointment',
    description: 'Tell us about your car and choose when and where you want the service.',
  },
  {
    number: '03',
    title: 'We Come To You',
    description: 'We bring the tools and products right to your driveway or workplace.',
  },
  {
    number: '04',
    title: 'Enjoy The Results',
    description: 'Sit back, relax, and enjoy your freshly detailed car.',
  },
];

export const WHY_CHOOSE_POINTS = [
  {
    number: '01',
    title: 'WE COME TO YOU',
    description: 'No need to drive anywhere. We bring our detailing service to your home or workplace.',
  },
  {
    number: '02',
    title: 'QUALITY PRODUCTS',
    description: 'We use professional car care products to clean and protect your vehicle.',
  },
  {
    number: '03',
    title: 'WE NOTICE THE DETAILS',
    description: 'From the wheels to the smallest corners inside your car, we take our time to get things right.',
  },
  {
    number: '04',
    title: 'YOUR EXPERIENCE MATTERS',
    description: 'Easy booking, clear communication, and service that puts you first.',
  },
];
