import React from 'react'
import './Certifications.css';
import reactlogo from './logo192.png'

function Certifications() {

  const certifications = [
    {
      name: 'Advanced React',
      link: 'https://coursera.org/share/2da9c3633eddeffcfa9b44251bf91132',
      certificateId: 'FK36HHZXF4SA',
      logo: reactlogo, // Add the logo file name or URL
    },
    {
      name: 'React Basics',
      link: 'https://www.coursera.org/account/accomplishments/certificate/TW97QYL69G8Q',
      certificateId: 'TW97QYL69G8Q',
      logo: reactlogo, // Add the logo file name or URL
    },
    {
      name: 'HTML and CSS in depth',
      link: 'https://www.coursera.org/account/accomplishments/certificate/JAF9UCHAKF5E',
      certificateId: 'JAF9UCHAKF5E',
      logo: 'https://mpng.subpng.com/20180802/tpl/kisspng-logo-html5-brand-clip-art-%E6%9D%89-%E5%B1%B1-%E8%89%AF-%E9%9B%84-5b62be01b565d5.334247781533197825743.jpg', // Add the logo file name or URL
    },
    {
      name: 'Version Control',
      certificateId: 'R7D8GEK59EDY',
      link: 'https://www.coursera.org/account/accomplishments/certificate/R7D8GEK59EDY',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpPu8A_lp5A4xpuhFJAugP93eBAtCyVLTwQ&usqp=CAU', // Add the logo file name or URL
    },
    {
      name: 'Programming with JavaScript',
      certificateId: 'H4DWUULBS28L',
      link: 'https://www.coursera.org/account/accomplishments/certificate/H4DWUULBS28L',
      logo: 'https://p7.hiclipart.com/preview/130/641/189/5bbe0d22a7625.jpg', // Add the logo file name or URL
    },
    {
      name: 'Python for Data Science',
      link: 'https://www.credly.com/badges/c5083fce-aace-4951-8d6e-a67519b6779f/linked_in_profile',
      logo: 'https://w7.pngwing.com/pngs/447/294/png-transparent-python-javascript-logo-clojure-python-logo-blue-angle-text.png', // Add the logo file name or URL
    },
    {
      name: 'SQL and Relational Databases 101',
      certificateId: '489bbcd7ccc44f32bfed8e18afbb38c3',
      link: 'https://courses.cognitiveclass.ai/certificates/489bbcd7ccc44f32bfed8e18afbb38c3',
      logo: 'https://banner2.cleanpng.com/20190421/ljf/kisspng-database-server-computer-icons-clip-art-flat-file-web-2-blue-2-accept-database-icon-free-web-2-blu-5cbd2898cc2b58.2547925815559005688363.jpg', // Add the logo file name or URL
    },
    {
      name: 'Power BI',
      link: 'https://www.udemy.com/certificate/UC-8f583cab-ace4-4c49-95ee-776a344b5349/',
      logo: 'https://www.pngmart.com/files/23/Power-Bi-Logo-PNG-File.png', // Add the logo file name or URL
    },
  ];
  

  return (
    <div className="certifications">
    <h2>Certifications</h2>
    <div className='con-cert'>
    {certifications.map((certification, index) => (
      <div className="certification" key={index}>
        <div className="certification-logo">
          <img src={certification.logo} alt={`${certification.name} Logo`} />
        </div>
        <div className="certification-details">
          <h3>{certification.name}</h3>
          <p>
           
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to verify
            </a>
          </p>
          {/* Add more details as needed */}
        </div>
      </div>
    ))}
    </div>
  </div>
  )
}

export default Certifications
