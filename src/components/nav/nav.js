import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="site-nav">
      <div className="site-nav__header-card">
        <p className="site-nav__card-title">Frontend Mentor</p>
        <p className="site-nav__card-text">Feedback Board</p>
      </div>
      <ul className="site-nav__cards">
        <li className="site-nav__card">
          <input name="filter" className="sita-nav__checked-input" type="radio" id="all" />
          <label className="site-nav__card-input" htmlFor="all">
            All
          </label>
        </li>
        <li className="site-nav__card">
          <input name="filter" className="sita-nav__checked-input" type="radio" id="ui" />
          <label className="site-nav__card-input" htmlFor="ui">
            UI
          </label>
        </li>
        <li className="site-nav__card">
          <input name="filter" className="sita-nav__checked-input" type="radio" id="ux" />
          <label className="site-nav__card-input" htmlFor="ux">
            UX
          </label>
        </li>
        <li className="site-nav__card">
          <input
          name="filter"
            className="sita-nav__checked-input"
            type="radio"
            id="Enhancement"
          />
          <label className="site-nav__card-input" htmlFor="Enhancement">
            Enhancement
          </label>
        </li>
        <li className="site-nav__card">
          <input
          name="filter"
            className="sita-nav__checked-input"
            type="radio"
            id="bug"
            defaultChecked
          />
          <label className="site-nav__card-input" htmlFor="bug">
            Bug
          </label>
        </li>
        <li className="site-nav__card">
          <input
          name="filter"
            className="sita-nav__checked-input"
            type="radio"
            id="feature"
          />
          <label className="site-nav__card-input" htmlFor="feature">
            Feature
          </label>
        </li>
      </ul>
      <div className="sita-nav__roadmap">
        <span className="site-nav__roadmap-title-wrapper">
          <h3 className="site-nav__roadmap-title">Roadmap</h3>
          <a className="site-nav__roadmap-link" href="#">
            View
          </a>
        </span>
        <ul className="site-nav__roadmap-cards">
          <li className="site-nav__roadmap-item">
            <p className="site-nav__roadmap-item-text">Planned</p>
            <p className="site-nav__roadmap-item-num">2</p>
          </li>
          <li className="site-nav__roadmap-item">
            <p className="site-nav__roadmap-item-text">In-Progress</p>
            <p className="site-nav__roadmap-item-num">3</p>
          </li>
          <li className="site-nav__roadmap-item">
            <p className="site-nav__roadmap-item-text">Live</p>
            <p className="site-nav__roadmap-item-num">1</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
