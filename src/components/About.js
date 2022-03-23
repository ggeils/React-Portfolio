import React from "react";

// Main about page layout
function About() {
  return (
    <section className="container">
      <h2 class="top-title">George Geils</h2>
      <hr></hr>
      <div>
        <img
          class="mb-4"
          id="avatar"
          src="https://avatars.githubusercontent.com/u/95538913?v=4"
          alt="Profile Picture"
        />
        <p>
          Full-Stack web developer and recent graduate of the UT Austin Coding
          Bootcamp. I am currently looking for a role as a Junior Software
          Developer.
        </p>
      </div>
    </section>
  );
}

export default About;
