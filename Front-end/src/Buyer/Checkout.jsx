import { AccordionBody,Accordion, AccordionHeader, Radio } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'



const Checkout = () => {

  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Accordion>
      <div className="">
        <div className="">
        <AccordionHeader >
                <div className="grid m-1 w-full shadow bg-white rounded border ">
                  <div
                    className="grid-cols-1 "
                    style={{ backgroundColor: "#81A356" }}
                  >
                    <p
                      className="d-flex mx-5 my-auto  p-2 text-start text-white"
                      style={{ Color: "#000000" }}
                    >
                      {" "}
                     Checkout{" "}
                    </p>
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody>
                <div className='bg-[white] '>
                <p className='grid grid-cols-1'>Payment mode options</p>
                <div className='grid grid-cols-2'>
                  <div>
                    <Card>
                      <div className='flex justify-start'>
                      <Radio id="green" name="color" color="green" />
                    
                      <p>Card</p>

                      </div>
                    </Card>
                  </div>

                </div>
                </div>
              </AccordionBody>
        </div>
      </div>
     
      </Accordion>
    </div>
  )
}

export default Checkout
