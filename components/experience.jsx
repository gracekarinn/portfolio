import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const experiences = [
  { title: 'BEM Fasilkom', image: '/bem.png', alt: 'bem' },
  { title: 'OH Fasilkom', image: '/oh.png', alt: 'OH' },
  { title: 'PERAK 2024', image: '/perak.png', alt: 'perak' },
  { title: 'Garuda Hacks', image: '/garudahacks.png', alt: 'gh' },
  { title: 'KM ITB', image: '/km.png', alt: 'km' },
  { title: 'AMI ITB', image: '/ami.png', alt: 'ami' },
];

const Experience = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className='mx-auto my-16 mb-40 scroll-mt-28' id='experience'>
      <h1 className='font-bold text-4xl md:text-5xl text-center mb-8 text-white'>My Experiences</h1>
      <hr className="border-custom-color -my-3 mb-5 w-40 mx-auto" style={{ borderColor: '#555' }} />
      <p className='text-white text-center text-[18px] mb-10'>Panit, intern, dan organisasi</p>
      <p className='text-white text-center text-[18px] mb-10'>Swipe right :D</p>
      <div className='slider-container relative'>
        <Slider {...settings} ref={sliderRef}>
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} title={experience.title} image={experience.image} alt={experience.alt} />
          ))}
        </Slider>
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
          <button onClick={prevSlide} className="bg-black text-white font-bold py-2 px-4 rounded-full mr-4 hover:bg-blue-700">
            &lt; Prev
          </button>
          <button onClick={nextSlide} className="bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700">
            Next &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
const ExperienceItem = ({ title, image, alt }) => {
  return (
    <div className='flex flex-col items-center justify-center mb-10'>
      <p className='text-lg text-white mb-4 text-center'>{title}</p>
      <div className='mx-auto'>
        <Image
          src={image}
          alt={alt}
          width={100}
          height={100}
          className='rounded-md'
        />
      </div>
    </div>
  );
}

export default Experience;
