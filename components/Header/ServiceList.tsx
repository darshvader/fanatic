import React from 'react';
import ServiceItem from './ServiceItem';

interface ServiceListProps {
  services: { heading: string; text: string; image:string }[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="service-list">
      {services.map((service, index) => (
        <ServiceItem key={index} image={service.image} heading={service.heading} text={service.text} />
      ))}
    </div>
  );
};

export default ServiceList;
