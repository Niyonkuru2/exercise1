import React from 'react';
import './Home.css';
import valiantImage from '../assets/valiant.JPG';

const Home = () => {
  return (
    <section className="hero" id='hero'>
      <div className="hero-img-wrapper">
      <img src={valiantImage} alt="valiant" className='hero-img' />
      </div>
        <p className="her-text">👌HELLO! <br />
        The name Prince traditionally refers <br />
        to someone of royal lineage, often a male <br />
        member of a monarchy. It symbolizes nobility, <br />
        leadership, and authority. The name is often <br />
        associated with someone who holds a position <br />
        of power or influence and is seen as dignified, <br />
        noble, and respected. It's a name that conveys <br />
        strength and importance.</p>
      <h1>Prince Nkundimana</h1>
    </section>
  );
};

export default Home;