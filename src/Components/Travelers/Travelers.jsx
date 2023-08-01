import React, { useEffect } from "react";

// Imported Destination Images ===========>
import paris from "../../assets/paris.jpg";
import newYork from "../../assets/newYork.jpg";
import dubai from "../../assets/dubai.jpg";
import london from "../../assets/london.jpg";

// Imported Traveler Images ===========>

import traveler1 from "../../assets/user(1).jpg";
import traveler2 from "../../assets/user(2).jpg";
import traveler3 from "../../assets/user(3).jpg";
import traveler4 from "../../assets/user(4).jpg";

// Import AOS ==========>

import Aos from "aos";
import "aos/dist/aos.css";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "Emily Willson",
    socialLink: "@emily_willson26",
  },
  {
    id: 2,
    destinationImage: newYork,
    travelerImage: traveler2,
    travelerName: "Lara Jameson",
    socialLink: "@lara_jameson03",
  },
  {
    id: 3,
    destinationImage: dubai,
    travelerImage: traveler3,
    travelerName: "Emma Miller",
    socialLink: "@emma_miller14",
  },
  {
    id: 4,
    destinationImage: london,
    travelerImage: traveler4,
    travelerName: "James Harlow",
    socialLink: "@james_harlow28",
  },
];

const Travelers = () => {
  // UseEffect to set animation duration ====>
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">
          Top Travelers of this month!
        </h2>
        <div className="travelersContainer grid">
          {travelers.map((traveler) => {
            return (
              /* Single passanger card */
              <div
                data-aos="fade-up"
                data-aos-duration="2500"
                key={traveler.id}
                className="singleTraveler"
              >
                <img
                  src={traveler.destinationImage}
                  className="destinationImage"
                />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img
                      src={traveler.travelerImage}
                      className="travelerImage"
                    />
                  </div>
                  <div className="travelerName">
                    <span>{traveler.travelerName}</span>
                    <p>{traveler.socialLink}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
