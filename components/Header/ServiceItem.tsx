// ServiceItem.tsx
import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image

interface ServiceItemProps {
  heading: string;
  text: string;
  image: string; // Use a string type for the image
}

const ServiceItem: React.FC<ServiceItemProps> = ({ image, heading, text }) => {
  return (
    <div className="service-item">
      <Image src={image} alt="Service Icon" width={100} height={100} /> {/* Set width and height as per your design */}
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServiceItem;


