import "./style.css";

export const CareerCard = ({ title, description, soft = [], roadmap = [] }) => {
  return (
    <section className="position">
      <article className="info-job">
        <h2 className="title-job">{title}</h2>
        <p className="description-job">{description}</p>
      </article>

      <article className="softs">
        <h3 className="h3-softs">SOFTS SKILLS:</h3>
        <ul>
          {soft.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </article>

      <article className="roadmap">
        <h3 className="text-h3-roadmap">ROADMAP DE APRENDIZADO:</h3>
        {roadmap.map((pair, index) => (
          <div className="doubles" key={index}>
            {pair.map((item, i) => (
              <p key={i} className={i === 0 ? "first" : "second"}>
                {item}
              </p>
            ))}
          </div>
        ))}
      </article>
    </section>
  );
};
