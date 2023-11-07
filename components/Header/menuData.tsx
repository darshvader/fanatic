// menuData.tsx
import { Menu, ServiceItem } from "@/types/menu";
import images from "../../public/images/speaker.jpg"
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Work",
    path: "/work",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Career",
    path: "/career",
    newTab: false,
  },
  {
    id: 7,
    title: "Services",
    path: "/services",
    newTab: false,
    submenu: [
      {
        id: 71,
        image: "/images/megaphone.png", // Specify the path to your image
        heading: 'Digital Branding',
        text: "Increase your brand's visibility and attract more customers",
      },
      {
        id: 72,
        image: "/images/webdesigning.png", // Specify the path to your image
        heading: 'Web Designing',
        text: "Increase your brand's visibility and attract more customers",
      },
      {
        id: 73,
        image: "/images/ecomdev.png", // Specify the path to your image
        heading: 'E-commerce Development',
        text: "Increase your brand's visibility and attract more customers",
      },
      {
        id: 74,
        image: "/images/digitalmarketing.png", // Specify the path to your image
        heading: 'Digital Marketing',
        text: "Increase your brand's visibility and attract more customers",
      },
      {
        id: 75,
        image: "/images/webdev.png", // Specify the path to your image
        heading: 'Web Development',
        text: "Increase your brand's visibility and attract more customers",
      },
      {
        id: 76,
        image: "/images/mobile.png", // Specify the path to your image
        heading: 'Mobile App Development',
        text: "Increase your brand's visibility and attract more customers",
      },
      // Add the remaining service items using the ServiceItem type
    ] as ServiceItem[],
  },
];

export default menuData;
