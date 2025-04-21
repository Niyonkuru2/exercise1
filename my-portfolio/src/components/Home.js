import React from 'react';
import './Home.css';
import valiantImage from '../assets/valiant.JPG';

const Home = () => {
  return (
    <div>
    <section id='hero'>
      <div className="hero-img-wrapper">
      <img src={valiantImage} alt="valiant" className='hero-img' />
      </div>
      <div className="text-content">
        <p className="hero-text">👌HELLO! <br />
        The name Prince traditionally refers
        to someone of royal lineage, often a male <br />
        member of a monarchy. It symbolizes nobility,
        leadership, and authority. The name is often <br />
        associated with someone who holds a position 
        of power or influence and is seen as dignified, <br />
        noble, and respected. It's a name that conveys
        strength and importance.</p>
        </div>
        <ul className="skills">
  <li>💻</li>
  <li>⚛️</li>
  <li>🎨</li>
  <li>🛠️</li>
</ul>
      <h1>Prince Nkundimana</h1>

    </section>

<section className="save">
<h2 className='saver'>
  I want you to know the adavntage empowering <br />
  your digital presence with web design&user focussed <br />
  experience in this word of developing.
</h2>
<p className="saved">
These opportunities are perfect for university students <br />
looking to build practical, in-demand digital and ICT skills. <br />
Explore and choose what suits your goals best🙏🙏🙏. 
</p>
<div className="experience">
<div>
        <span className="number">1.5<sup>+</sup></span> year of experience
</div>
<div>
        <span className="number">6<sup>+</sup></span> client
</div>
<div>
        <span className="number">7<sup>+</sup></span> project
</div>
</div>
</section>
</div>
  );
};

export default Home;