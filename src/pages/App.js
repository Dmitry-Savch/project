import React, { useState } from 'react';
import imageRetroPcs from '../assets/images/image-retro-pcs.jpg';
import imageTopLaptops from '../assets/images/image-top-laptops.jpg';
import imageGamingGrowth from '../assets/images/image-gaming-growth.jpg';
import iconMenu from '../assets/images/icon-menu.svg';
import iconMenuClose from '../assets/images/icon-menu-close.svg';
import logo from '../assets/images/logo.svg';
import './index.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleCloseClick = () => {
    setMenuOpen(false);
  };

  return (
      <div className="home">
        <header>
          <img src={logo} alt="Logo" />
          <div className="burger-menu">
            <img
                src={iconMenu}
                alt="Menu"
                className="menu-icon"
                onClick={handleMenuClick}
                style={{ display: menuOpen ? 'none' : 'block' }}
            />
            <img
                src={iconMenuClose}
                alt="Close"
                className="close-icon"
                onClick={handleCloseClick}
                style={{ display: menuOpen ? 'block' : 'none' }}
            />
          </div>
          <nav className={`manu ${menuOpen ? 'active' : ''}`}>
            <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
          </nav>
        </header>
        <main>
          <div className="wrapper">
            <div className="main-image"></div>
            <div className="headline">
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="description">
              <p>
                We drive into next evolution of the web that claims to put the power
                of the platforms back into the hands of the people.
                But it is really fulfilling its promise?
              </p>
              <button>Read more</button>
            </div>

            <div className="sidebar">
              <h1>New</h1>
              <h2>Hydrogen VS Electric Cars</h2>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              <hr/>
              <h2>The Downsides of Al Artistry</h2>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              <hr/>
              <h2>Is VC Funding Drying Up?</h2>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>

            <div className="article">
              <img src={imageRetroPcs} alt="Retro PCs"/>
              <div className="article-description">
                <h2>01</h2>
                <b>Reviving Retro PCs</b>
                <p>What happens when old PCs are given modern upgrades?</p>
              </div>
            </div>

            <div className="article">
              <img src={imageTopLaptops} alt="Top Laptops"/>
              <div className="article-description">
                <h2>02</h2>
                <b>Top 10 Laptops of 2022</b>
                <p>Our best picks of various needs and budgets.</p>
              </div>
            </div>

            <div className="article">
              <img src={imageGamingGrowth} alt="Gaming Growth"/>
              <div className="article-description">
                <h2>03</h2>
                <b>The Growth of Gaming</b>
                <p>How the pandemic has sparked freshtunities.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}

export default App;