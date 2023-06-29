import React from "react";
import { Feature } from "../../components";
import "./about.css";

const About = () => {
  return (
    <div className="about__container" id="about">
      {/* <div className="about__resume">Resume</div> */}
      <div className="about__features">
        <Feature
          title="Background"
          text="Originally from Indiana, I relocated to California due to my service in the Air Force. The diverse experiences and challenges I encountered during my time in the military have shaped me into a disciplined and adaptable individual. My journey began with an Associate's Degree in Aviation Maintenance Technology, where I developed a strong foundation in problem-solving and attention to detail. Intrigued by the world of technology, I transitioned into pursuing a Bachelor's Degree in Computer Science, which opened doors to my passion for software development. "
        />
        <Feature
          title="Education"
          text="I completed my Associate's Degree in Aviation Maintenance Technology, equipping me with valuable technical skills and a meticulous approach to problem-solving. Eager to explore the vast possibilities of computer science, I pursued and am close to completing my Bachelor's Degree in the field. This educational journey has expanded my knowledge in programming languages, algorithms, and software engineering principles, empowering me to tackle complex challenges in the digital realm.

Additionally, I successfully completed a Full Stack Software Engineering Bootcamp, which provided intensive training in modern web development technologies and practices. The bootcamp deepened my understanding of front-end and back-end development, enabling me to build robust and user-friendly applications."
        />
        <Feature
          title="Experience"
          text="During my 10-year tenure in the Air Force, I gained diverse experience in various roles. For two years, I served as an instructor, where I developed my leadership skills and effectively communicated complex concepts to a diverse group of learners. Additionally, I acquired a Community College of the Air Force (CCAF) Instructor Certification Level 1, further solidifying my instructional abilities.

As a Cyber Support Liaison for two years, I engaged with multidisciplinary teams and leveraged my technical expertise to ensure the secure and efficient operation of critical systems. This role allowed me to strengthen my problem-solving skills and adapt to rapidly evolving technology landscapes."
        />
        <Feature
          title="Passion"
          text="I have a deep interest in leveraging technology to make a positive impact in various industries. One area that particularly captivates me is the realm of entertainment. I am intrigued by the intersection of technology and media, and the potential to create immersive and engaging experiences for users. Whether it's designing innovative streaming platforms, developing interactive applications, or exploring new avenues for content delivery, I am excited to contribute to this dynamic industry.

While I have a strong affinity for backend development, my passion for software development extends beyond a specific area. I thrive on the challenges and opportunities presented by both frontend and backend development. I enjoy crafting seamless user interfaces that provide intuitive experiences, as well as designing scalable and efficient backend systems to support complex functionalities. The blend of creativity and technical problem-solving in full-stack development truly energizes me."
        />
      </div>
    </div>
  );
};

export default About;
