import React from 'react';
import './Rahbariyat.css';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/Rahbariyat/jumaqulov Golib.png';
import Blog2Img from '../../utils/Rahbariyat/mamirov Feruz.png';
import Blog3Img from '../../utils/Rahbariyat/Nazarov Nozim.png';
const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        name: "G'olibjon",
        firstname:"Jumaqulov",
        lastname:"Hasanovich",
        description: "Buxoro davlat universiteti Qorako'l akademik litseyi direktori"
    },
    {
        id: 2,
        img: [Blog2Img],
        name: "Feruz",
        firstname:"Mamirov",
        lastname:"To'xtaxonovich",
        description: "Buxoro davlat universiteti Qorako'l akademik litseyi o'quv ishlari bo'yicha direktor o'rinbosari"
    },
    {
        id: 3,
        img: [Blog3Img],
        name: "Nozim",
        firstname:"Nazarov",
        lastname:"Umidjon o'g'li",
        description: " Buxoro davlat universiteti  Qorako‘l akademik litseyi Yoshlar masalalari va ma’naviy va ma’rifiy ishlar bo’yicha direktor o’rinbosari"
    },
    
];

function Rahbariyat() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Rahbariyat bo'limi</h1>
                </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top"src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4 rahbarname'>{blog.firstname} {blog.name} {blog.lastname}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Rahbariyat;