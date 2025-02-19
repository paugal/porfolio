import React from "react";
import "./More.css";
import MoreMockup from "../../assets/imgs/more/more-mockup2.webp";
import { div } from "framer-motion/client";

const tecnologies = [
  {
    label: "Frontend",
    list: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Leaflet.js",
      "i18next",
      "Chart.js",
    ],
  },
  {
    label: "Backend",
    list: [
      "Node.js",
      "Express.js",
      "Supabase",
      "Multer (file uploads)",
      "Nodemailer",
    ],
  },
  {
    label: "Development Tools",
    list: ["Git", "Netlify CI/CD", "Railway", "ESLint"],
  },
];

export default function More() {
  return (
    <div className="more-container">
      <div className="more-title">
        <h1>Mobility Report</h1>
      </div>
      <div className="technologies">
        {tecnologies.map((tech, index) => (
          <div key={index}>
            <div className="techTitle">{tech.label}:</div>
            <div className="techItemsContainer">
              {tech.list.map((item, itemIndex) => (
                <div className="techItems" key={itemIndex}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="more-content">
        <h3>Project Overview</h3>
        <div className="more-overview">
          <div className="more-description">
            <p>
              Mobility Report is a full-stack application designed to improve
              public transportation maintenance through crowdsourced reporting.
              The platform enables citizens to report infrastructure issues
              across various transit modes providing real-time data to
              maintenance teams and improving the overall transit experience.
            </p>
            <p>
              As both the primary architect and developer, I created a solution
              that bridges the communication gap between transit users and
              operators, making maintenance more responsive and efficient.
            </p>
          </div>
          <div className="more-images">
            <img src={MoreMockup} alt="More Landing Page " />
          </div>
        </div>
        <h3>The Challenge</h3>
        <div className="more-overview">
          <div className="more-challenge">
            <p>
              Public transportation systems face significant challenges with
              timely issue reporting:
            </p>
            <ul>
              <li>
                Fragmented communication channels lead to maintenance delays
              </li>
              <li>No centralized system to track and prioritize repairs</li>
              <li>Lack of transparency in maintenance status updates</li>
              <li>Difficulty identifying recurring problem areas</li>
            </ul>
            <p>
              Passengers experience frustration, operators struggle with
              resource allocation, and municipalities lack actionable data for
              infrastructure planning.
            </p>
          </div>
        </div>
        <h3>Architecture Overview</h3>
        <div className="more-overview">
          <div className="more-challenge">
            <p>
              I implemented Mobility Report using a modern, scalable
              architecture:
            </p>
            <div className="more-tech-section-container">
              <div>
                <p>Frontend</p>
                <ul>
                  <li>React with hooks for state management</li>
                  <li>Responsive design with Tailwind CSS</li>
                  <li>Redux for global state management</li>
                  <li>Leaflet.js for interactive maps and geolocation</li>
                  <li>Internationalization with i18next</li>
                  <li>Chart.js for data visualization</li>
                </ul>
              </div>

              <div>
                <p>Backend</p>
                <ul>
                  <li>Express.js RESTful API</li>
                  <li>Supabase for data storage</li>
                  <li>
                    Custom device fingerprinting for anonymous user tracking
                  </li>
                  <li>Real-time database listeners</li>
                  <li>Secure API middleware pattern</li>
                </ul>
              </div>

              <div>
                <p>DevOps</p>
                <ul>
                  <li>CI/CD deployment via Netlify and Railway</li>
                  <li>Environment-based configuration</li>
                  <li>Cross-origin resource sharing (CORS) implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="link-to-more">
        <a
          href="https://mobilityreport.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the project
        </a>
      </div>
    </div>
  );
}
