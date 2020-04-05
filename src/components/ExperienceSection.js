import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ExperienceSection() {
  const PRIMARY = "#00c3ff";
  const SECONDARY = "#003d4d";
  const WHITE = "#fff";
  return (
    <section className="page-section bg-primary" id="experience">
      <div className="container">
        {/* <!-- Contact Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Experience
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Contact Section Form--> */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: WHITE, color: SECONDARY }}
            date="2019 February - Current"
            iconStyle={{ background: "red", color: "#fff" }}
            icon={
              <i
                className="fas fa-school"
                style={{ fontSize: "22px", paddingRight: "2px" }}
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">
              Coderschool Student
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              HCMC, Vietnam
            </h4>
            <p>
              Studying web Development frameworks and tools, such as React,
              Bootstrap for HTML/CSS, and NodeJS back end servers. Created solo
              web apps, and collaborated in team assignments to create websites
              and apps.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: WHITE, color: SECONDARY }}
            date="2019 April - 2019 December"
            iconStyle={{ background: "black", color: "#fff" }}
            icon={
              <i
                className="fas fa-user-tie"
                style={{ fontSize: "32px", paddingRight: "2px" }}
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">
              FDM Group, IT Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Austin, TX</h4>
            <p>
              Utilized Java OOD programing, ORACLE SQL tools, Spring framework,
              Unix command line, Git to work on enterprise software applications
              for clients. Worked locally and remotely with agile teams.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: WHITE, color: SECONDARY }}
            date="2018"
            iconStyle={{ background: "#e6e600", color: SECONDARY }}
            icon={
              <i
                className="fas fa-graduation-cap"
                style={{ fontSize: "24px", paddingRight: "5px" }}
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">
              Graduated University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Diego, CA
            </h4>
            <p>
              Studied International Business, Economics, and Marketing. Took
              additional courses in Computer Science and Japanese studies.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2018"
            contentStyle={{ background: WHITE, color: SECONDARY }}
            iconStyle={{ background: "green", color: "#fff" }}
            icon={
              <i
                className="fas fa-print"
                style={{ fontSize: "34px", paddingRight: "10px" }}
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">
              Office Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Diego, CA
            </h4>
            <p>
              Office Assistant duties that include handling documentation with
              MS Excel/Word, marketing for campus wide events, and club approval
              and event funding forms for over 100+ student orgs
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2017"
            contentStyle={{ background: WHITE, color: SECONDARY }}
            iconStyle={{ background: "magenta", color: "#fff" }}
            icon={
              <i
                className="fas fa-gamepad"
                style={{ fontSize: "35px", paddingRight: "18px" }}
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">
              Triton Gaming Club Member
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Diego, CA
            </h4>
            <p>
              Staffed social and competitive Live Gaming Community events -
              providing customer service, logistical support, and merchandise
              sales.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: PRIMARY, color: "#fff" }}
            date="2014 (started university)"
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}
