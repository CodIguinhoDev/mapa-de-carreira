import linkedinLogo from "/src/assets/logo-linkedin.svg";
import igorImg from "/src/assets/igor.jpeg";
import githubLogo from "/src/assets/logo-github.svg";

import "./style.css";

export const Header = () => {
  return (
    <header>
      <section className="section-header">
        <article className="background-image">
          <img
            className="image"
            src={igorImg}
            alt="Foto Igor"
            width={"250"}
            height={"350"}
          />
        </article>
        <article className="info-header">
          <h1>IGOR LIMA SILVA</h1>
          <p className="paragraph-text">Mapa de carreira</p>
        </article>
        <article>
          <div className="contacts">
            <a href="https://www.linkedin.com/in/igor-limasilva/">
              <img src={linkedinLogo} alt="logo Linkedin" />
            </a>
            <a href="https://github.com/CodIguinhoDev">
              <img src={githubLogo} alt="logo GitHhub" />
            </a>
          </div>
        </article>
      </section>
    </header>
  );
};
