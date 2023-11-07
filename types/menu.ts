export type Menu = {
    id: number;
    title: string;
    path?: string;
    newTab: boolean;
    submenu?: ServiceItem[];
  };
  
 
export type ServiceItem = {
  id: number;
  heading: string;
  text: string;
  path?: string;
  image: string;
};
