import React from 'react';
import pizza from './pizza.svg';
import './About.css';

function About() {
  return (
    <div className="About">
      <header className="About-header">
        
        <img src={pizza} className="About-logo u-bottom-m" alt="logo" />
        <div class="u-bottom-s">
          This app is brought to you by:
        </div> 

            <a
              className="About-link"
              href="https://kendrickang.github.io/me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kendrick Ang
            </a>
            <a
              className="About-link"
              href="https://website-lowjiayee.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Low Jia Yee
            </a>
            <a
              className="About-link"
              href="https://teikjun.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tan Teik Jun
            </a>
          <div class="u-top-m">
          (╯°□°)╯︵ ┻━┻ 
          </div> 
      </header>
    </div>
  );
}

export default About;
