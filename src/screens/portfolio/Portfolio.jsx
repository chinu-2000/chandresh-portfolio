import React from "react";
import "./portfolio.css";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import blog from "../../images/blog.png";
import dustcart from "../../images/dustCart.png";
import formVal from "../../images/form-validator.png";
import newyear from "../../images/new-year.png";
import relaxer from "../../images/relaxer.png";

function Portfolio() { 
  return (
    <div id="portfolio" className="social-menu">
      <h1>PORTFOLIO</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={blog} height={"60%"} />
          <Card.Body className="card-bg1" >
            <Card.Title>
              <p className="card-title">INFINTE BLOG</p>{" "}
            </Card.Title>
            <Card.Text>
              This is an infinite blog connected to JSON api
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a
                href="https://chinu-2000.github.io/infinite-blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="link">BLOG LINK</p>
              </a>
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={dustcart}
            height={"60%"}
            target="_blank"
            rel="noopener noreferrer"
          />
          <Card.Body className="card-bg2">
            <Card.Title>
              <p className="card-title">DUSTCART</p>
            </Card.Title>
            <Card.Text>
              A simple responsive site ,made with bootstrap.

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a
                href="https://chinu-2000.github.io/DustCart/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="link">DUSTCART LINK</p>
              </a>
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={formVal} height={"60%"} />
          <Card.Body className="card-bg1">
            <Card.Title>
              <p className="card-title">FORM VALIDATOR</p>
            </Card.Title>
            <Card.Text>
              A form validator made with java script.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a
                href="https://chinu-2000.github.io/form-validator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="link">FORM VALIDATOR LINK</p>
              </a>
            </small>
          </Card.Footer>
        </Card>
        <br />
        <Card>
          <Card.Img variant="top" src={newyear} height={"60%"} />
          <Card.Body className="card-bg2">
            <Card.Title>
              <p className="card-title">NEW YEAR COUNTER</p>
            </Card.Title>
            <Card.Text>
              A countdown to every Year.  
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a
                href="https://chinu-2000.github.io/NewYearCountdown/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="link">NEW YEAR LINK</p>
              </a>
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={relaxer} height={"60%"} />
          <Card.Body className="card-bg1">
            <Card.Title>
              <p className="card-title">RELAXER</p>
            </Card.Title>
            <Card.Text>
              A relaxer site.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a
                href="https://chinu-2000.github.io/Relaxer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="link">RELAXER LINK</p>
              </a>
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
export default Portfolio;
