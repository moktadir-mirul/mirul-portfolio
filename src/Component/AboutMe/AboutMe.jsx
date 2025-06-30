import React from "react";

const AboutMe = () => {
  return (
    <div className="pt-10 pb-5 w-11/12 mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="md:border-l-4 pl-4 border-orange-500 text-center md:text-left text-4xl font-bold play text-orange-500">
        About Me
      </h1>
      <div className="pt-5 text-lg space-y-2 text-justify">
        <p>
          Hey there! I'm a passionate and curious full-stack web developer who
          started exploring the world of programming in 2024. My journey began
          with a mix of YouTube tutorials, tech books, and the hands-on
          curriculum at Programming Hero, where I built a solid foundation in
          <strong>
            {" "}
            HTML, CSS, JavaScript, React, Express.js, and MongoDB
          </strong>
          .
        </p>
        <p>
          Among all these technologies, <strong>React</strong> has become my
          favorite playground. I love building interactive web applications that
          feel smooth and dynamic. There's something deeply satisfying about
          crafting <b>full-stack projects</b> that solve real problems — from
          front-end design to backend logic, I enjoy owning the entire workflow.
        </p>{" "}
        <p>
          Beyond the screen, I’m a big fan of{" "}
          <i>mystery and spy thrillers — both in books and films.</i> You'll
          often find me diving into the pages of a gripping Bangla novel or
          binge-watching sci-fi series like Foundation. I also enjoy exploring
          new places and cultures — traveling refreshes my creativity and helps
          me see the world through different lenses.
        </p>{" "}
        <p>
          As a person,{" "}
          <strong>
            I'm detail-oriented, always eager to learn independently, and driven
            by curiosity.
          </strong>{" "}
          I enjoy figuring things out on my own{" "}
          <strong>
            <i>but also love collaborating with others</i>
          </strong>{" "}
          who share a passion for clean code and clever solutions. Whether it's
          coding, reading, or exploring, I'm always looking for stories —
          whether to build them, read them, or live them.
        </p>{" "}
        <p>Let’s build something amazing together!</p>
      </div>
    </div>
  );
};

export default AboutMe;
