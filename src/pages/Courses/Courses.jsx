import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Texnika guruhi',
        place: '104',
        specialSince:'Matematika, Fizika, Ingliz tili'

    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Moliya guruhi',
        place: '26',
        specialSince: 'Matematika, Ingliz tili'

    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Neft-gaz, kimyo guruhi',
        place: '26',
        specialSince: 'Kimyo, Matematika'
    },
    {
        id: 4,
        img: [HealthcareCourseImg],
        title: 'Tibbiyot',
        place:'26',
        specialSince: 'Biologiya, Kimyo'
    },
    {
        id: 5,
        img: [EducationCourseImg],
        title: 'Yurispredunsiya guruhi',
        place:'26',
        specialSince:'Tarix, Huquq, Ingliz tili'
    }
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Talim yo'nalishlari</h1>
                <p className='text-center w-75 mb-5'>Bizda sifat va natija doim birinchi o'rinda!!!</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>Qabul qilinadiga o'quvchilar soni:<span className='CourseSpan'>{course.place}</span></Card.Text>
                                <Card.Subtitle className='text-center'>Yo'naltirilgan fanlar : <span className='CourseSpan'>{course.specialSince}</span></Card.Subtitle>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;