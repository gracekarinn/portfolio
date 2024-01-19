import React from 'react';
import Link from 'next/link';
import "/Users/gracekarin/Desktop/project/components/project.css";

const data = {
  "portfolio": [
    {
      "id": "1",
      "src": "/sbf.png",
      "title": "SBF Project",
      "description": "Contributed to BEM Fasilkom Project",
      "link": "https://project-sbf.vercel.app"
    },
    {
      "id": "2",
      "src": "./portfolio.png",
      "title": "Portfolio Website",
      "description": "My First Website",
      "link": "#about"
    },
  ]
};

export default function Project() {
  return (
    <section className='portfolio--section' id="projects">
      <div className='container'>
        <div className='main-title'>
          <h1>My Projects</h1>
        </div>
        <div className='row'>
          {data?.portfolio?.map((item, index) => (
            <div key={index} className='col'>
              <div className='sub-title'>
                <h2>{item.title}</h2>
              </div>
              <div className='portfolio--section--img'>
                <img src={item.src} alt={`Project ${item.title}`} />
              </div>
              <div className='subject'>{item.description}</div>
              <Link
                className="portfolio--link mt-3 bg-blue-500 px-5 py-3 rounded-full text-white hover:bg-blue-600 transition-all duration-300"
                href={item.link}
                target='_blank'>
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
