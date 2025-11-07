import "./style.css";
import { CareerCard } from "./CareerCard";

export const Main = () => {
  return (
    <main>
      <section className="about-me">
        <h1 className="text-h1">SOBRE MIM:</h1>
        <p className="paragraph-h1">
          Me chamo Igor, estudante de análise e desenvolvimento de sistemas, com
          formação técnica em automação industrial e foco no desenvolvimento de
          soluções baseadas em dados. Me dedico ao desenvolvimento fullstack e a
          área de dados, com foco em aprender continuamente e aplicar tecnologia
          para resolver problemas reais. Tenho grande interesse por machine
          learning, especialmente nas áreas de Visão Computacional e
          Inteligência Artificial.
        </p>
      </section>

      <section className="careerMap">
        <h1 className="text-mapCareer">MAPA DE CARREIRA</h1>
        <CareerCard
          title="Estagiário de Dados ou Machine Learning:"
          description="Nesta posição, irei ajudar a coletar, limpar e explorar dados.
              Construir e testar modelos simples de ML supervisionado com
              orientação. Também quero desenvolver minha base técnica."
          soft={[
            "Organização e atenção a detalhes",
            "Boa comunicação com áreas de negócio",
            "Proatividade",
          ]}
          roadmap={[
            ["Python", "SQL"],
            ["Pandas", "Numpy"],
            ["Scikit-learn", "Git/GitHub"],
          ]}
        />
        <hr />

        <CareerCard
          title="Engenheiro de Machine Learning Júnior:"
          description="Com esse cargo, quero aprimorar minha capacidade de criar modelos
          preditivos e análises mais complexas. Desenvolvendo, treinando e
          testando modelos de ML em dados estruturados e não estruturados.
          Pretendo começar a aplicar redes neurais, visão computacional e NLP em
          projetos reais."
          soft={[
            "Trabalho em equipe",
            "Aprendizado contínuo",
            "Capacidade de resolver problemas",
            "Proatividade",
          ]}
          roadmap={[
            ["Machine Learning", "Redes Neurais"],
            ["CNNs", "Cloud básica"],
            ["Deploy de modelos", "TensorFlow"],
          ]}
        />
        <hr />

        <CareerCard
          title="Engenheiro de Machine Learning Pleno:"
          description="Nessa posição, busco assumir maior autonomia no desenvolvimento de soluções de Machine Learning, liderando partes de projetos e garantindo boas práticas em todo o ciclo de vida dos modelos desde a coleta de dados até o deploy. Quero aprofundar meus conhecimentos em engenharia de dados, MLOps e integração de sistemas em nuvem, trabalhando em soluções escaláveis e de alto desempenho."
          soft={[
            "Pensamento estratégico",
            "Aprendizado contínuo",
            "Boa comunicação técnica",
            "Mentoria a juniors",
          ]}
          roadmap={[
            ["Redes Transformer", "Pytorch"],
            ["Spark", "CI/CD"],
            ["Treinamento distribuído", "MLOps"],
          ]}
        />

        <hr />

        <CareerCard
          title="Engenheiro de Machine Learning Sênior:"
          description="Na posição de sênior, quero ser uma referência técnica dentro da equipe, conduzindo decisões estratégicas e mentorando profissionais mais novos. Pretendo projetar e implementar arquiteturas complexas de IA, garantindo qualidade, performance e segurança nas soluções desenvolvidas. Busco unir conhecimento técnico avançado e visão de negócio para gerar impacto real com inteligência artificial."
          soft={[
            "Liderança técnica",
            "Pensamento sistêmico",
            "Tomada de decisão baseada em evidências",
            "Mentoria a juniors e plenos",
          ]}
          roadmap={[
            ["Deep Learning", "Diffusion Models"],
            ["Infraestrutura de dados", "Cloud Avançado"],
            ["Arquitetura de sistemas de IA"],
          ]}
        />

        <hr />

        <CareerCard
          title="Pesquisador em IA:"
          description="Como pesquisador, pretendo explorar e desenvolver novas abordagens em IA, contribuindo com estudos e avanços científicos. Desejo atuar em projetos inovadores, combinando pesquisa aplicada e desenvolvimento prático, além de publicar artigos e colaborar com universidades e empresas. Meu objetivo é criar soluções que ampliem o estado da arte em inteligência artificial e tragam benefícios reais para a sociedade."
          soft={[
            "Pensamento científico",
            "Criatividade e experimentação",
            "Tomada de decisão baseada em evidências",
            "Capacidade de colaboração multidisciplinar",
          ]}
          roadmap={[
            ["LLMs", "Publicações científicas"],
            ["IA generativas", "Parcerias com universidades"],
            ["Participação em conferências"],
          ]}
        />
      </section>
    </main>
  );
};
