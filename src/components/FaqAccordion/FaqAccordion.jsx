import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Ko'p so'raladigan savollar</h2>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Qanday qilib litseyga o'qishga kirsam bo'ladi ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo ducimus quod qui eius nobis quam temporibus similique fugit? Molestias, illo, maxime nulla aliquid ut pariatur corrupti aspernatur dolor assumenda quos officia eos?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Imtihon qachon bo'ladi va natijalarimni qanday bilib olaman ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo ducimus quod qui eius nobis quam temporibus similique fugit? Molestias, illo, maxime nulla aliquid ut pariatur corrupti aspernatur dolor assumenda quos officia eos?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>O'qish tekinmi yoki pullik ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo ducimus quod qui eius nobis quam temporibus similique fugit? Molestias, illo, maxime nulla aliquid ut pariatur corrupti aspernatur dolor assumenda quos officia eos?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>O'quv guruhlari haqida qayerdan malumot olaman ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo ducimus quod qui eius nobis quam temporibus similique fugit? Molestias, illo, maxime nulla aliquid ut pariatur corrupti aspernatur dolor assumenda quos officia eos?
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;