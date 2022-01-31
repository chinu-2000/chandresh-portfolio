import React from "react";
import "./contactMe.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { useState } from 'react';
import { init } from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

init("user_wcnjr87BiqU6bRmGjLKfa");

const ContactMe = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset()
    emailjs
      .sendForm(
        "service_v11o4lb",
        "template_1cszq6r",
        formRef.current,
        "user_wcnjr87BiqU6bRmGjLKfa"
      )
      .then(
        (result) => {
          console.log(result.text);
          // setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c " id="contact">
      <div className="c-bg "></div>
      <div className="c-wrapper">
        <div className="c-right">
          <p className="c-desc">Get in Touch 😁</p>

          <div className="social-bar">
            <a
              href="https://www.facebook.com/chandresh.pandey.5458"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-button">
                <FaFacebook size={"1.22rem"} color="midnightblue" />
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/chandresh-pandey-0089a6181/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-button">
                <BsLinkedin size={"1.22rem"} color="#0e76a8" />
              </button>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=918755011597"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-button">
                <FaWhatsapp size={"1.22rem"} color="forestgreen" />
              </button>
            </a>

            <a
              href="https://github.com/chinu-2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-button">
                <FaGithub size={"1.22rem"} color="#171515" />
              </button>
            </a>

            <a
              href="mailto:chandreshpandey.uip@gmail.com?cc=email-cc@gmail.com&bcc=email-bcc@gmail.com&subject=Subject Using Mailto.co.uk&body=Email Using Body"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-button">
                <FaEnvelope size={"1.22rem"} color="firebrick" />
              </button>
            </a>
          </div>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Name" name="user_name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="user_email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="subject"
                placeholder="Subject"
                name="user_subject"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                rows="5"
                type="message"
                placeholder="Message"
                name="message"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
