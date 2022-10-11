import React from "react";

const caseStudies = [
  {
    id: 1,
    subtitle: "Website Development",
    title: "Expanding Your Business with the Right Website.",
    img: "Dev"
  },
  {
    id: 2,
    subtitle: "Branding",
    title: "Transforming brand your customers will love",
    img: "Branding"
  },
  {
    id: 3,
    subtitle: "Media Production",
    title: "Get visibility and more exposure with powerful video",
    img: "Media"
  },
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h1>{caseItem.title}</h1>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
