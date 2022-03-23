import React from "react";
import Cards from "../components/index";
import portfolio from "../components/portfolio.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
  return (
    <section className="container">
      <div className="project">
        <h2>Portfolio</h2>
        <hr></hr>
      </div>

      <Wrapper id="card-data">
        {portfolio.map((project) => (
          <Cards
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
            description={project.description}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default Portfolio;
