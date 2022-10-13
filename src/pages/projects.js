import React from "react";

const Projects = () => {

  return (
    <div className="page">
      <div className='container'>
  <section className="section section--intro1">
    <h2 className="section__title">
      Our <br /> Projects
    </h2>
    <p className="section__text">
    Craft, code and smile.We are a digital agency.  Our approach is characterized by an agile method combining strategy, design and technology.  Oh, and <p className="colorful">great people</p> too.
    </p>
    <p className="section__text section__text--alt">
      <span>Discover</span>
      <svg
        className="section__arrow"
        width="22px"
        height="22px"
        viewBox="0 0 24 24"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
        />
      </svg>
      <span>more</span>
    </p>
  </section>
  <section className="section--showcase">
    <header className="section__header">
      <span className="section__year">2020</span>
      <h2 className="section__title section__title--medium" style={{display:"flex", justifyContent:"center", gap:"1rem"}}>
        Selected <br /> Work
      </h2>
      <span className="section__year">now</span>
    </header>
    <div className="row1">
      <div className="row__header">
      <div className="row__header-1">
        <span >2022</span>
        <span className="bold" style={{textAlign:"center", lineHeight:"1.2"}}>Back2Growth incubation program</span>
        <span >REACT / Threejs</span>
        
        </div>
        <div>
        <span className="colorful">Website Design</span>
        </div>
        </div>
    </div>
    <div className="row1">
      <div className="row__header">
      <div className="row__header-1">
        <span >2022</span>
        <span className="bold" style={{textAlign:"center", lineHeight:"1.2"}}>Back2Growth incubation program</span>
        <span>Brand identity</span>
        </div>
        <div>
        <span className="colorful">Branding</span>
        </div>
        </div>
    </div>
    <div className="row1">
      <div className="row__header">
      <div className="row__header-1">
        <span >2022</span>
        <span className="bold" style={{textAlign:"center", lineHeight:"1.2"}}>Impact'Her incubation program</span>
        <span>Brand identity</span>
        </div>
        <div>
        <span className="colorful">Branding</span>
        </div>
        </div>
    </div>
    <div className="row1">
      <div className="row__header">
      <div className="row__header-1">
        <span >2021</span>
        <span className="bold" style={{textAlign:"center", lineHeight:"1.2"}}>Brides's Secret Dress store</span>
        <span >NEXTJS / REACT</span>
        </div>
        <div>
        <span className="colorful">Website Design</span>
        </div>
        
          
        </div>
      
    </div>
    <div className="row1">
      <div className="row__header">
      <div className="row__header-1">
        <span >2021</span>
        <span className="bold" style={{textAlign:"center", lineHeight:"1.2"}}>Dandelion by Maryem</span>
        <span >NEXTJS / REACT</span>
        </div>
        <div>
        <span className="colorful">Website Design</span>
        </div>
        
          
        </div>
      
    </div>
    
    

  </section>
</div>
</div>


  )
}

export default Projects;
