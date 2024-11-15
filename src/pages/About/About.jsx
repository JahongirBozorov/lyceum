import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import AboutUsSectionImg from "../../utils/images/about-us-section-img.jpg";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import Person1 from "../../utils/images/person1.jpg";
import Person2 from "../../utils/images/person2.jpg";
import Person3 from "../../utils/images/person3.jpg";
import Person4 from "../../utils/images/person4.jpg";
import Person5 from "../../utils/images/person5.jpg";
import Person6 from "../../utils/images/person6.jpg";
import Person7 from "../../utils/images/person7.jpg";
import Person8 from "../../utils/images/person8.jpg";
import Person9 from "../../utils/images/person9.jpg";

const persons = [
  {
    id: 1,
    img: [Person1],
  },
  {
    id: 2,
    img: [Person2],
  },
  {
    id: 3,
    img: [Person3],
  },
  {
    id: 4,
    img: [Person4],
  },
  {
    id: 5,
    img: [Person5],
  },
  {
    id: 6,
    img: [Person6],
  },
  {
    id: 7,
    img: [Person7],
  },
  {
    id: 8,
    img: [Person8],
  },
  {
    id: 9,
    img: [Person9],
  },
];

function About() {
  return (
    <div className="about-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Biz haqimizda</h1>
          <p className="text-center w-75 mb-5">
            Zamonaviy taraqqiyot va eki qadriyatlar uyg'unligiga ega maskan!!!
          </p>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0">
            <h2 className="mb-4 mb-lg-5">
              Sobiq rahbar{" "}
              <span className="aboutSpan">To'xtamurod Jumayev</span> haqida
            </h2>
            <p>
              1961 йилда Олот туманидаги 1-ўрта мактабни тугатган. 1962 йил
              Бухоро Давлат педагогика олийгоҳининг математика куллиѐтига
              сиртдан ўқишга кирган. 1967 йилда шу олийгоҳни математика
              ўқитувчиси мутахассислиги бўйича тугатган.1961-63 йилларда Қоракўл
              туманидаги 10-ўрта мактабда ѐшлар етакчиси ва бошланғич синф
              ўқитувчиси, 1963-65 йилларда Олот туманидаги 3-ўрта мактабда
              бошланғич синф ва математика ўқитувчиси,1965-1990 йилларда Қоракўл
              туманидаги 8-ўрта мактабда математика ўқитувчиси бўлиб ишлаган
            </p>
            <p className="mb-4 mb-lg-5">
              1970-1990 йилларда 8-ўрта мактабда кечки мактаб мудири, тарбиявий
              ишлар ташкилотчиси ва таълим-тарбия ишлари бўйича директор
              ўринбосари бўлиб ишлаган, 1990-2009 йилларда Қоракўл туманидаги
              1-сон ихтисослаштирилган иқтидорли болалар мактаб-интернати
              директори вазифасида ишлаган. 2009-2016 йилларда БухДУ қошидаги 3
              – сон Қоракўл академик лицейда директори вазифасида ишлаган.
            </p>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={AboutUsSectionImg} className="img-fluid w-75" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <ChooseSection />
      </div>

      <div className="bg-body-tertiary py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Winners</h2>
          <div className="row g-4">
            {persons.map((person) => (
              <div key={person.id} className="col-md-4">
                <img src={person.img} className="img-fluid" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
