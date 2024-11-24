import { AiFillTikTok } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaWaze } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { PiBuildingOfficeFill } from "react-icons/pi";
import HomeManpower from '@/assets/Home/OurServices/manpowerSupply.jpg';
import CleaningHome from '@/assets/Home/OurServices/cleaningSupply.jpeg';
import WorkShopHome from '@/assets/Home/OurServices/workshopHome.jpg';
import PuspakomHome from '@/assets/Home/OurServices/puspakomHome.jpg';
import sampleImage from '@/assets/sample.jpg';
import LogoHandalIndah from '@/assets/AboutUs/Clients/handalindahLogo.png';
import LogoCauseLink from '@/assets/AboutUs/Clients/causewaylinkLogo.png';
import LogoShopee from '@/assets/AboutUs/Clients/Shopee-logo.png'

import LorryWWD from '@/assets/WhatWeDo/LocalManpowerSupply/Lorry.jpg';
import DriverWWD from '@/assets/WhatWeDo/LocalManpowerSupply/driver.jpg';
import RiderWWD from '@/assets/WhatWeDo/LocalManpowerSupply/rider.jpg';
import CoverLMP from '@/assets/WhatWeDo/LocalManpowerSupply/coverpicture2.jpeg';

import WarehouseWWD from '@/assets/WhatWeDo/LocalManpowerSupply/Warehouse.jpg';
import PuspakomLogo from '@/assets/WhatWeDo/Puspakom/Puspakom.jpeg';
import PuspakomInspection from '@/assets/WhatWeDo/Puspakom/puspakominspection.jpg';
import RoadtaxRenew from '@/assets/WhatWeDo/Puspakom/roadtaxrenewal.jpg';

import CoverHostel from '@/assets/WhatWeDo/HostelManagement/CoverHostel.jpeg';
import Hostel from '@/assets/WhatWeDo/HostelManagement/Room.jpg';
import Bed from '@/assets/WhatWeDo/HostelManagement/BunkBed.jpg';

import Cleaning from '@/assets/WhatWeDo/ForeignManpowerSupply/Cleaning.jpg';
import Construction from '@/assets/WhatWeDo/ForeignManpowerSupply/Construction.jpg';
import Manufacturing from '@/assets/WhatWeDo/ForeignManpowerSupply/Manufacturing.jpg';
import Plantation from '@/assets/WhatWeDo/ForeignManpowerSupply/Plantation.jpg';
import ForeignWorker from '@/assets/WhatWeDo/ForeignManpowerSupply/ForeignWorker.jpg';

import BayuEnak from '@/assets/WhatWeDo/logo_bayuenak.jpg';
import BodyPaint from '@/assets/WhatWeDo/Workshop/bodypaint.jpeg';
import Maintenance from '@/assets/WhatWeDo/Workshop/maintenance.jpeg';
import Repair from '@/assets/WhatWeDo/Workshop/repair.jpeg';
import Workshop from '@/assets/WhatWeDo/Workshop/workshop.jpeg';
import TowTruck from '@/assets/WhatWeDo/Workshop/TowTruck.jpg';

import VSLLogo from '@/assets/WhatWeDo/vslLogo.jpeg';
import ThreePLCover from '@/assets/WhatWeDo/3PL/3PLCover.jpg';
import Logistic from '@/assets/WhatWeDo/3PL/Logistic.jpg';
import Transporter from '@/assets/WhatWeDo/3PL/Transporter.jpg';
import TradingCover from '@/assets/WhatWeDo/Trading/TradingCover.jpg';
import CorporateGift from '@/assets/WhatWeDo/Trading/CorporateGift.jpg';
import ITCover from '@/assets/WhatWeDo/ItSolution/ITCover.jpg';
import Hardware from '@/assets/WhatWeDo/ItSolution/Hardware.jpg';
import Software from '@/assets/WhatWeDo/ItSolution/Software.jpg';

import Driver from '@/assets/driver.jpg';
import Driver2 from '@/assets/driver2.jpg';
import Driver3 from '@/assets/driver3.jpg';
import Delivery1 from '@/assets/delivery.jpg';
import Puspakom from '@/assets/puspakom.jpg';
import Puspakom4 from '@/assets/puspakom4.jpg';
import Workshop6 from '@/assets/workshop.jpg';
import Workshop2 from '@/assets/workshop2.jpg';
import Workshop3 from '@/assets/workshop3.jpg';
import Workshop4 from '@/assets/workshop4.jpg';
import Workshop5 from '@/assets/workshop5.jpg';
import Cleaning1 from '@/assets/cleaning_service1.jpg';
import Cleaning2 from '@/assets/cleaning_service2.jpg';

import Expertise from '@/assets/Home/WhyUs/expertise.png';
import Reliable from '@/assets/Home/WhyUs/reliable.png';
import CustFocus from '@/assets/Home/WhyUs/customerFocus.png';
import { title } from "process";

export const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "about-us" },
    { name: "What We Do", link: "what-we-do" },
    { name: "Career", link: "career" },
    { name: "Contact Us", link: "contact-us" },
  ];
  
  export const HomeServices = [
    { title: 'Manpower Supply', description: 'Reliable staffing solutions tailored to your needs.', image: HomeManpower },
    { title: 'Puspakom Runner Service', description: 'Hassle-free Puspakom inspections.', image: PuspakomHome },
    { title: 'Cleaning Services', description: 'Professional cleaning for all environments.', image: CleaningHome },
    { title: 'Workshop Services', description: 'Comprehensive workshop solutions.', image: WorkShopHome },
  ];

  export const HomeAboutUs = [
    { src: '/path-to-image1.jpg', alt: 'Description 1', size: 'h-64 md:h-80 lg:h-96' },
    { src: '/path-to-image2.jpg', alt: 'Description 2', size: 'h-48 md:h-64 lg:h-80' },
    { src: '/path-to-image3.jpg', alt: 'Description 3', size: 'h-56 md:h-72 lg:h-96' },
  ];

  export const HomeWhyChooseUs = [
    { title: 'Reliable', description: 'We’re dependable and available whenever you need us.', image: Reliable },
    { title: 'Expertise', description: 'Our team is skilled and experienced in all service areas.', image: Expertise },
    { title: 'Customer Focus', description: 'We prioritize client satisfaction above all else.', image: CustFocus },
  ];

  export const footerSocialMedia = [
    { icon: <AiFillTikTok size={46} />, link: 'https://www.tiktok.com/@vibrantsets?_t=8oOx5KxvWMM&_r=1' },
    { icon: <BiLogoFacebookSquare size={46} />, link: 'https://www.facebook.com/share/yBD63MddbUnaBc3q/?mibextid=LQQJ4d' },
    // { icon: <FaWaze size={46} />, link: 'https://waze.com/ul/hw2864vw8b' },
  ];

  export const footerPolicy = [
    { name: "Privacy Policy", link: "/privacy-policy"},
    { name: "Terms of Service", link: "/terms-of-service"},
  ];

  export const footerCompany = [
    { icon: <MdOutlineMail size={30} />, link: 'mailto:vibrant.sets@gmail.com', text: 'vibrant.sets@gmail.com', extraClass: 'text-blue-400' },
    { icon: <FaPhoneVolume size={26} />, link: 'tel:+60125832365', text: '+60 12-583 2365' },
    { icon: <PiBuildingOfficeFill size={36} />, link: 'https://g.co/kgs/wUf3SDR', text: '2-1-43, Wisma Rampai, Rampai Town Centre, WPKL' },
  ];

  export const aboutUsCoreValues = [
    { title: 'Integrity', description: 'We act with honesty and integrity in all we do.' },
    { title: 'Customer Focus', description: 'Our customers are at the heart of our business.' },
    { title: 'Excellence', description: 'We strive for excellence in every project.' },
    { title: 'Innovation', description: 'We embrace change and innovation to improve our services.' },
  ];

  export const aboutUsClients = [
    { image: LogoHandalIndah },
    { image: LogoCauseLink },
    { image: LogoShopee },
  ];

  export const whatWeDoItem = [
    {
      category: "Vibrant Sets",
      bgColor: '#f4f0d7',
      items: [
        {
          id: "1",
          imageFront: CoverLMP,
          title: "LOCAL MANPOWER SUPPLY",
          subtitle: "We provide local manpower to ease and solve our client's problem by providing stable local workers",
          displayItem: [
            { src: LorryWWD, caption: "Drivers (Lorry)" },
            { src: DriverWWD, caption: "Drivers (Cars/Van)" },
            { src: RiderWWD, caption: "Riders" },
            { src: WarehouseWWD, caption: "Sorters, Warehouse, Technicals, Oil & Gas, Logistics, Call Center" }
          ]
        },
        {
          id: "2",
          imageFront: PuspakomLogo,
          title: "PUSPAKOM INSPECTION",
          subtitle: "With just a phone call, we'll manage everything for you",
          displayItem: [
            { src: PuspakomInspection, caption: "Roadtax Renewal" },
            { src: RoadtaxRenew, caption: "Vehicle Inspections" }
          ]
        },
        {
          id: "3",
          imageFront: CoverHostel,
          title: "HOSTEL MANAGEMENT",
          subtitle: "We buy. We sell. We lease. Just name it!",
          displayItem: [
            { src: Hostel, caption: "Hostel" },
            { src: Bed, caption: "Hostel" }
          ]
        },
        {
          id: "4",
          imageFront: ForeignWorker,
          title: "FOREIGN WORKERS SUPPLY",
          subtitle: "We provide skilled and reliable foreign workers to meet your business needs",
          displayItem: [
            { src: Cleaning, caption: "Cleaning" },
            { src: Manufacturing, caption: "Manufacturing" },
            { src: Construction, caption: "Construction" },
            { src: Plantation, caption: "Plantation" }
          ]
        },
      ],
    },
    {
      category: "Bayu Enak Sdn Bhd",
      bgColor: '#f4f0d7',
      items: [
        {
          id: "6",
          imageFront: BayuEnak,
          title: "WORKSHOP",
          subtitle: "We provide one stop panel services for our client",
          displayItem: [
            { src: BodyPaint, caption: "Body And Paint" },
            { src: TowTruck, caption: "Tow Truck Service" },
            { src: Maintenance, caption: "Service Maintenance" },
            { src: Repair, caption: "Vehicle Repair" }
          ]
        },
      ],
    },
    {
      category: "Vibrant Servestar Logistic Sdn Bhd",
      bgColor: '#f4f0d7',
      items: [
        {
          id: "7",
          imageFront: VSLLogo,
          title: "TRADING",
          subtitle: "Connecting markets, driving opportunities.",
          displayItem: [
            { src: CorporateGift, caption: "Corporate Gift" }
          ]
        },
        {
          id: "8",
          imageFront: ThreePLCover,
          title: "3PL",
          subtitle:  "Streamlining logistics to deliver your success.",
          displayItem: [
            { src: Logistic, caption: "Logistics" },
            { src: Transporter, caption: "Transporter Service" }
          ]
        },
        {
          id: "9",
          imageFront: ITCover,
          title: "IT SOLUTIONS",
          subtitle: "Innovative tech for smarter businesses.",
          displayItem: [
            { src: Hardware, caption: "Hardware" },
            { src: Software, caption: "Software" }
          ]
        },
      ],
    },
  ];

  export const careerItem = [
    {
      category: "First Mile / Fasa Awal Pengangkutan",
      item: [
        {
          id: 1,
          jobTitle: "Lorry Driver / Pemandu Lori",
          jobDescription: "Drive Lorry",
          jobRequirement: [
            "D-License and E-License holder / Pemegang lesen GDL D dan E",
            "18 - 45 years old / 18 - 45 Tahun",
            "Experienced with driving lorry / Mempunyai pengalaman membawa lori ",
          ],
        },
        {
          id: 2,
          jobTitle: "First Mile Sorter / Pengasing Barang",
          jobDescription: "Parcel sorting",
          jobRequirement: [
            "18 - 30 years old / 18 - 30 Tahun",
            "Physically fit to handle parcels / Berkemampuan untuk mengendali barangan",
            "Ability to go to work location  / Berkemampuan untuk bergerak ke lokasi kerja",
          ],
        },
      ],
    },
    {
      category: "Line Haul / Pengangkutan Jarak Jauh",
      item: [
        {
          id: 3,
          jobTitle: "Lorry Driver / Pemandu Lori",
          jobDescription: "Drive Lorry",
          jobRequirement: [
            "D-License holder",
            "Knowledge of road safety regulations",
          ],
        },
      ],
    },
    {
      category: "Last Mile / Fasa Akhir Pengangkutan",
      item: [
        {
          id: 4,
          jobTitle: "Full-Time Delivery / Penghantar Sepenuh Masa",
          jobDescription: "Drive Lorry",
          jobRequirement: [
            "D-License holder",
            "Ability to follow delivery schedules",
          ],
        },
        {
          id: 5,
          jobTitle: "Part-Time Delivery / Penghantar Separuh Masa",
          jobDescription: "Drive Lorry",
          jobRequirement: [
            "D-License holder",
            "Flexible working hours availability",
          ],
        },
        {
          id: 6,
          jobTitle: "Sorter / Pengasing Barang",
          jobDescription: "Parcel sorting",
          jobRequirement: [
            ">18 years old",
            "Attention to detail",
            "Ability to work in a fast-paced environment",
          ],
        },
      ],
    },
    {
      category: "Others / Lain-lain",
      item: [
        {
          id: 7,
          jobTitle: "Bus Driver / Pemandu Bas",
          jobDescription: "Drive Lorry",
          jobRequirement: [
            "D-License holder",
            "Excellent customer service skills",
          ],
        },
        {
          id: 8,
          jobTitle: "Mechanic / Mekanik",
          jobDescription: "Repair vehicle",
          jobRequirement: [
            "Vehicle repairing and maintenance knowledge",
            "Ability to diagnose and fix issues quickly",
          ],
        },
      ],
    },
  ];
  
  export const contactUsItem = [
    { 
      name: "VSSB", 
      link: ['https://www.tiktok.com/@vibrantsets?_t=8oOx5KxvWMM&_r=1','https://www.facebook.com/share/yBD63MddbUnaBc3q/?mibextid=LQQJ4d'],
      socMedLogo: [<AiFillTikTok/>, <BiLogoFacebookSquare/>]
    },
  ]