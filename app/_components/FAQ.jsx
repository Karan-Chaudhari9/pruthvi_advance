import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="py-20">
      <div className="text-center">
      <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
                        <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
                        FAQ
                        <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
                    </h2>
      </div>
      {/* *********************** */}
      <div className="pt-20">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="py-3">
            <AccordionTrigger className="text-lg md:text-xl">
              How Do I Schedule an Experiment at Pruthvi Advance Lab?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-gray-600">
              To schedule an experiment at Pruthvi Advance Lab, simply visit our website or contact the lab coordinator directly. You will need to provide your preferred time slot and the required equipment details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-3">
            <AccordionTrigger className="text-lg md:text-xl">
              What Equipment is Available at Pruthvi Advance Lab?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-gray-600">
              Pruthvi Advance Lab is equipped with a variety of state-of-the-art equipment for research and experimentation, including advanced machinery for material testing, environmental monitoring, and chemical analysis. For a detailed list, please refer to our equipment catalog on the website.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-3">
            <AccordionTrigger className="text-lg md:text-xl">
              What Are the Lab’s Operating Hours?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-gray-600">
              Our lab operates from Monday to Friday, from 9:00 AM to 6:00 PM. Special hours may be arranged for specific research projects upon request.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-3">
            <AccordionTrigger className="text-lg md:text-xl">
              Do You Offer Training for Using the Lab Equipment?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-gray-600">
              Yes, we offer specialized training sessions for all equipment available in the lab. Training is mandatory before using any advanced machinery to ensure safe and efficient use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="py-3">
            <AccordionTrigger className="text-lg md:text-xl">
              Can I Conduct Research Collaborations with Pruthvi Advance Lab?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-gray-600">
              Absolutely! Pruthvi Advance Lab welcomes collaborations with academic institutions, research organizations, and industry professionals. Please contact our lab director to discuss potential collaboration opportunities.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* *********************** */}
    </div>
  );
};

export default FAQ;
