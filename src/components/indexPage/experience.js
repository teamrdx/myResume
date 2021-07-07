import React from "react";
import { RiBookmark3Line } from "react-icons/ri";
import { IconText } from "../../common/iconText";
import { Container } from "../../common/container";
import Card from "../../common/card";

const Experience = () => {
  return (
    <Container>
      <div>
        <IconText
          icon={<RiBookmark3Line size={21} color="var(--black)" />}
          text="Experience"
        />
        <Card
          work="Solda GmbH"
          position="Frontend | Backend Developer"
          duration="Dec 2020 - Present"
          location="Berlin, Germany"
          description={[
            "Developed Website from Scratch using Gatsby & React, hosted in the cloud and optimized SEO ranking, Set up analytics for and started various social media advertising campaigns.",
            "Built backend services with Node, Express and MongoDB.  Automated customer order, email handling, check-out experience, and customer services resulting in 600% in time saving.",
          ]}
          link="https://notebookberlin.de/"
        />
        <Card
          work="Doti Health"
          position="Front-end Developer | Intern"
          duration="April 2020 - Dec 2020"
          location="London, UK"
          description={[
            "Developed and maintained a new website from scratch on WordPress. Built frontend and backend systems for web app using React & Node. Developed part of the mobile app in Flutter.",
          ]}
          link="https://dotihealth.co.uk/"
        />
        <Card
          work="Freelance"
          position="Full-stack Developer"
          duration="May 2020 - Dec 2020"
          location="Berlin & remote"
          description={[
            "Developed around a dozen websites for various clients, including restaurants, publishing house, arts & media company, and individuals. Most of these were paid work, while some were part of the coursework undertaken during this period.",
          ]}
          link="https://team-rdx.com/"
        />
        <Card
          work="Founder Institute"
          position="Participant"
          duration="Jan 2020 - April 2020"
          location="Berlin, Germany"
          description={[
            "Developed a smart waiter-less restaurant app idea into a well-developed mobile prototype and pitched to investors while seeking a technical co-founder. Although not funded, the experience inspired a decision to gain technical proficiency which led to a career in programming.",
          ]}
          link="https://fi.co/s/berlin"
        />
        <Card
          work="Momo House"
          position="Owner"
          duration="Sep 2017 - Jun 2018"
          location="Berlin, Germany"
          description={[
            "Momo House was a Nepalese restaurant serving hot dumpling lunches to professionals in the city. Started the business with an initial investment of €15,000 and more than doubled the business in 9 months. Led logistics and operations, finances, customer service, marketing, sales, and employed 1 person to support food prep.",
          ]}
          link="#"
        />
        <Card
          work="Bombay Restaurant"
          position="Manager | Head Waiter"
          duration="Aug 2012 - Jun 2017"
          location="Berlin, Germany"
          description={[
            "Started as a part-time kitchen helper and climbed through the ranks in this Indian restaurant, progressing to head waiter and then restaurant manager within a year, and operating the business to good profitability over the subsequent 5 years.",
          ]}
          link="https://www.bombay-berlin.de/"
        />
      </div>
    </Container>
  );
};

export default Experience;
