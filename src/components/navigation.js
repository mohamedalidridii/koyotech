import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li>
                <NavLink to='/projects' exact>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to='/services' exact>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to='/about-us' exact>
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <NavLink to='/contact' exact>
                    medalidridi@koyotechnologies.com
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/audit' exact>
                    Get a free audit
                  </NavLink>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Headquarter</li>
                <li>61 Cité essafa</li>
                <li>Boumhal 2097</li>
                <li>Tunisia</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+216 20 801 178</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
