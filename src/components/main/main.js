// import { Link, Route, Routes } from 'react-router-dom';
import "./main.scss";
import Feedbacks from "./feedbacks";
import Header from "../header/header";

function main() {
  return (
    <main className="site-main">
      <Header />

      <section className="hero-section">
        <ul className="hero-section__cards">
          <Feedbacks />
        </ul>
      </section>
    </main>
  );
}

export default main;
