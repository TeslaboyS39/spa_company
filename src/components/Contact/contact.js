import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert";

import HTML from "../../assets/htmllogo.png";
import CSS from "../../assets/csslogo.png";
import JS from "../../assets/jslogo.png";
import PG from "../../assets/postgresqllogo.png";
import Expressjs from "../../assets/expressjslogo.png";
import Sequelize from "../../assets/sequelizelogo.png";
import Vue from "../../assets/vuejslogo.png";
import ReactJS from "../../assets/reactjslogo.png";
import NodeJS from "../../assets/nodejslogo.png";
import MongoDB from "../../assets/mongodblogo.png";
import Jquery from "../../assets/jquerylogo.png";
import Jest from "../../assets/jestlogo.png";
import Tailwind from "../../assets/tailwindlogo.png";
import Redux from "../../assets/reduxlogo.png";
import Redis from "../../assets/redislogo.png";
import Pinia from "../../assets/pinialogo.png";
import GraphQL from "../../assets/graphqllogo.png";
import Bootstrap from "../../assets/bootstraplogo.png";
import Apollo from "../../assets/apollologo.png";
import WhatsAppIcon from "../../assets/whatsappIcon.png";
import InstagramIcon from "../../assets/instagramIcon.png";

import Client1 from "../../assets/client1.png";
import Client2 from "../../assets/client2.png";
import Client3 from "../../assets/client3.png";

const technologies = [
  { name: "HTML", image: HTML },
  { name: "CSS", image: CSS },
  { name: "JavaScript", image: JS },
  { name: "PostgreSQL", image: PG },
  { name: "Express.js", image: Expressjs },
  { name: "Sequelize", image: Sequelize },
  { name: "Vue.js", image: Vue },
  { name: "React.js", image: ReactJS },
  { name: "Node.js", image: NodeJS },
  { name: "jQuery", image: Jquery },
  { name: "Jest", image: Jest },
  { name: "Redis", image: Redis },
  { name: "Pinia", image: Pinia },
  { name: "Redux", image: Redux },
  { name: "Tailwind CSS", image: Tailwind },
  { name: "Bootstrap", image: Bootstrap },
  { name: "MongoDB", image: MongoDB },
  { name: "Apollo", image: Apollo },
  { name: "GraphQL", image: GraphQL },
  // ... (nambahin technya lagi tinggal disini aja)
];

const clients = [
  { name: "Client 1", image: Client1 },
  { name: "Client 2", image: Client2 },
  { name: "Client 3", image: Client3 },
  // ... (logo clients lainnya)
];

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zy7e36i",
        "template_bhp9j08",
        form.current,
        "ScuWmox5NjM2DC8d4"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          Swal({
            title: "Success!",
            text: "Email sent!",
            icon: "success",
            button: "OK",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="technologies">
        <h1 className="contactPageTitle">Technologies</h1>
        <p className="technologyDesc">
          We have developed proficiency in a diverse array of technologies and
          tools through numerous projects. Below, we showcase key components of
          our technical expertise, encompassing the tech stack and tools
          commonly utilized in our projects.
        </p>
        <div className="technologyImgs">
          {technologies.map((tech, index) => (
            <div key={index} className="technologyImgContainer">
              <img
                src={tech.image}
                alt={`Technology ${index + 1}`}
                className="technologyImg"
              />
              <div className="overlay">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div id="clients">
        <h1 className="contactPageTitle">Clients and Partnership</h1>
        <p className="clientDesc">
          We are proud to have collaborated with the following clients and
          partners on various projects.
        </p>
        <div className="clientImgs">
          {clients.map((client, index) => (
            <div key={index} className="clientImgContainer">
              <img
                src={client.image}
                alt={`Client ${index + 1}`}
                className="clientImg"
              />
              <div className="overlay">{client.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Us</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work and partnership
          opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name or Your Company's name"
            name="from_name"
          ></input>
          <input
            type="email"
            className="email"
            placeholder="Your Email(Personal/Company)"
            name="from_email"
          ></input>
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://api.whatsapp.com/send?phone=6285777778655">
              <img src={WhatsAppIcon} alt="Whatsapp" className="link" />
            </a>
            <a href="https://www.instagram.com/nalatech.id/">
              <img src={InstagramIcon} alt="Github" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
