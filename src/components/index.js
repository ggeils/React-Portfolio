import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Card helper function for portfolio.js
function Cards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p className="card-title">{props.name}</p>
        <p class="proj-icons-container">
          <a href={props.github}>
            <img
              class="project-icon"
              src="https://img.icons8.com/ios-glyphs/344/github.png"
              alt="GitHub"
            />
          </a>
          <a href={props.deploy}>
            <img
              class="project-icon"
              src="https://img.icons8.com/fluent/48/000000/domain.png"
              alt="Deployed Link"
            />
          </a>
        </p>
        <p class="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Cards;
