"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Accordion, Contact } from '@/components';

interface AccordionProp {
    id: number;
    title: string;
    content: string;
    isOpen: boolean;
}


const contact = () => {

    const [accordions, setAccordions] = useState<AccordionProp[]>([
        { id: 1, title: 'What is your pricing based on?', content: 'Pricing varies based on project needs, complexity, and timeline.', isOpen: false },
        { id: 2, title: 'How long does a typical project take?', content: 'Pricing varies based on project needs, complexity, and timeline.', isOpen: false },
        { id: 3, title: 'What is your approach to website security?', content: 'Pricing varies based on project needs, complexity, and timeline.', isOpen: false },
        { id: 4, title: 'Do you offer ongoing maintenance and support?', content: 'Pricing varies based on project needs, complexity, and timeline.', isOpen: false },
        { id: 5, title: 'What sets your agency apart from competitors?', content: 'Pricing varies based on project needs, complexity, and timeline.', isOpen: false }
    ]);

    const toggleAccordion = (id: number) => {
        setAccordions((prevState) =>
          prevState.map((accordion) => {  
            console.log('accordion'); 
            if (accordion.id === id) {
              return { ...accordion, isOpen: !accordion.isOpen };
            }
            console.log(accordions);
            return { ...accordion, isOpen: false };
          })
        );
       
      };



    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <div>
            <section className='contactSection mt-32'>
                <div className="tfc_container">
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='leftBlock'>
                            <div className="content">
                                <h5>CONTACT US </h5>
                                <h1 className='mt-16 mb-12'>Let’s Talk Business.</h1>
                                <p>From strategy to execution, we’re here to help you achieve your business goals.</p>
                            </div>
                        </div>
                        <div className='formContent col-span-2 pl-32'>
                            <h3 className='mb-16'>Scheduled an appointment</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p className=''> Hey, My Name Is
                                    <input
                                        type="text"
                                        {...register('name', { required: true })}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <span>Name is required</span>}
                                    and I’m looking for </p>

                                <p> <input
                                    type="text"
                                    {...register('requirement', { required: true })}
                                    placeholder="Looking for"
                                />
                                    {errors.email && <span>Email is required</span>}
                                    Get in Touch </p>
                                <p> with me at  <input
                                    type="email"
                                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                    placeholder="Your Email"
                                />
                                    {errors.email && <span>Email is required</span>}
                                </p>

                                <p className='mt-16 text-gray-400'>
                                    <input type="checkbox" id="checkbox" />
                                    I here by accept all terms and conditions
                                </p>

                                <button className='tfcBtnone' type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section >


            <section className='contactSection mt-64'>
                <div className="tfc_container">
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='leftBlock'>
                            <div className="content">
                                <h5>FAQ'S </h5>
                                <h1 className='mt-16 mb-12'>Common Questions</h1>
                            </div>
                        </div>
                        <div className='formContent col-span-2 pl-32'>
                            <h3 className='mb-16'>Scheduled an appointment</h3>
                            {accordions.map((accordion) => (
                                <Accordion
                                    key={accordion.id}
                                    title={accordion.title}
                                    content={accordion.content}
                                    isOpen={accordion.isOpen}
                                    toggleAccordion={() => toggleAccordion(accordion.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            <Contact />
        </div>
    )
}

export default contact

