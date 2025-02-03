import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="item-1">
        <h1>About Me</h1>
        <p>
          Welcome! I'm Sanjog Rai, an aspiring Web Developer with a deep
          love for web development, UI/UX design, software
          engineering. With years of learning experiences, I specialize in creating
          intuitive user experiences, dynamic web applications, efficient software solutions.
        </p>
      </div>

      <div className="item-2">
        <h1>My Journey</h1>
        <p>
          My journey in Web Development began when I decided to learn HTML and CSS in my school. Over the years, I have honed my skills in
          HTML, CSS, JavaScript and React. I have also
          worked on projects ranging from web applications,
          websites and some basic projects.
        </p>
      </div>

      <div className="item-3">
        <h1>What Drives Me</h1>
        <p>
          I believe in innovation, creativity and efficiency. I am passionate about
          user-first design, problem-solving. Whether it’s building a sleek,
          responsive website or optimizing backend performance, I strive to
          deliver high-quality, impactful solutions that make a difference.
        </p>
      </div>

      <div className="item-4">
        <h1>Beyond Work</h1>
        <p>
          When I’m not coding or designing, you’ll find me playing guitar, singing and gaming. I love
          connecting with like-minded individuals and am always eager to
          collaborate on exciting projects.
        </p>
      </div>

      <div className="next-page">
        <div className="left-part">
          <h1>Learn about my studies.</h1>
          <Link to={'/education'}><button className="next-btn">Next page</button></Link>
        </div>
        <div className="next-image">
        </div>
      </div>
    </div>
  );
}

export default About;
