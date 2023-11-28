import React from "react";
import "./skills.css";
import Offer1 from "../../assets/offer1.png";
import Offer2 from "../../assets/offer2.png";
import Offer3 from "../../assets/offer3.png";

const Skills = () => {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">What We Offer?</span>
        <span className="skillDesc">
          Empowering businesses through IT excellence, we provide a suite of
          services, including Enterprise System Integration, IT Consultation,
          Custom Software Development, Cybersecurity Solutions, Cloud Services,
          IT Outsourcing, and many more. From optimizing IT infrastructure to
          delivering secure, scalable solutions, we are your dedicated partner
          in navigating the digital landscape with innovation and efficiency.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={Offer1} alt="Offer1" className="skillBarImg" />
            <div className="skillBarText">
              <h2>IT Consultation</h2>
              <p>
                Delivering expert IT consultation services, we guide businesses
                in harnessing the full potential of technology. From strategic
                planning to effective implementation, we assist clients in
                devising and executing robust technology strategies that drive
                innovation and elevate operational excellence.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Offer2} alt="Offer2" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Software Development</h2>
              <p>
                Specializing in both mobile app and web development, we deliver
                top-notch solutions to enhance your digital presence. Our
                expertise extends to creating user-friendly and engaging digital
                platforms that not only meet but exceed expectations, ultimately
                driving business growth through innovative and captivating
                online experiences.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Offer3} alt="Offer3" className="skillBarImg" />
            <div className="skillBarText">
              <h2>IT Automation</h2>
              <p>
                Spearheading IT automation initiatives, we specialize in
                Continuous Integration/Continuous Deployment (CI/CD) and Robotic
                Process Automation (RPA) to streamline operations. Our focus on
                optimizing processes enhances efficiency, reducing manual
                workloads and empowering your business with cutting-edge
                automation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
