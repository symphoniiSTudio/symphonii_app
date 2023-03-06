import React from "react";
import "./OurProcess.css";
import { Link } from "react-router-dom";

function OurProcess() {
  return (
    <div>
      <div
        className="ourprocessdiv"
        // style={{ backgroundImage: "url(/img/s2.jpg)" }}
      >
        <div className="did111">
          <div className="ourprocessconatiner">
            <div className="ourprocessheader">
            <div className="ourservicehea">Our process</div>
            <div className="reactsh11">
              We focus on three simple solution-based approach to tackling
              complex projects, understanding the client’s needs and motivation,
              creating many ideas in brainstorming sessions and adopting the
              best solution to the challenge.
            </div>
            </div>
            <div className="ourprocessmain">
              <div className="ourbrief">
                <h1>Brief</h1>
                <p>
                  The first stage of our Design process is to gain an empathic
                  understanding of your project. This involves gathering the
                  brief to find out more about the project and motivations. We
                  collect sketches, photographs, references and gather data to
                  start giving you inspiration. We also define who your target
                  audience or market could be and the purpose for your
                  creation..
                </p>
              </div>
              <div className="ourconcept">
                <h1>Design</h1>
                <p>
                  We analyze the information we have gathered in order to define
                  the core requirements; this will help our artists put together
                  great ideas and concepts to establish features, functions, and
                  any other elements that will allow us to proffer the best
                  solution to the challenge. Brainstorm and Worst Possible Idea
                  sessions are typically used to stimulate free thinking and to
                  expand the problem space.{" "}
                </p>
              </div>
              <div className="oursolution">
                <h1>Deliver</h1>
                <p>
                  The design team will now present designs based on the
                  brainstorm and idea creation process that best suits your
                  brief. In this stage we go through series of design reviews
                  and approvals to the finest details until final selection,
                  Clients and users’ feedback are all taken into consideration
                  at this stage upon which a final, well detailed and packaged
                  version of the project is delivered to you.
                </p>
              </div>
            </div>
            <Link to="/portfolio">
              <button className="btncalss">Check Our Portfolio</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
