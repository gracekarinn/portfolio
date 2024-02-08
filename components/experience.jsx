import React from 'react';
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

  return (
    <section className='mx-auto my-16 mb-40' id='experience'>
      <h1 className='font-bold text-4xl md:text-5xl text-center mb-8 text-white'>My Experiences</h1>
      <hr className="border-custom-color -my-3 mb-5 w-40 mx-auto" style={{ borderColor: '#555' }} />
      <p className='text-white text-center text-[18px]'>Panit, intern, dan organisasi</p>
      <p className='text-white text-center text-[18px] mb-10'>Swipe right :D</p>
      <div className='slider-container'>
        <Slider {...settings}>
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} title={experience.title} image={experience.image} alt={experience.alt} />
          ))}
        </Slider>
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
