import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../Context/AppContext";
import hands from "../css/images/hands.jpg";
import mask from "../css/images/mask.jpg";
import ft from "../css/images/6ft.jpg";
import molding from "../css/images/molding.jpg";
import useStore, { calculateTitlesById } from "../../utils/store";
import useFetchData from "../../utils/hookEfect";

const Links = () => {
  const { fetchData } = useFetchData()
  const { data } = useStore()
  const { changeColor, setChangeColor } = useContext(AppContext);
  const titleID = calculateTitlesById(data)

 const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
  const h2 = {
    color: changeColor ? "#008ead" : "",
  };

  const estyle = {
    backgroundImage: changeColor
      ? "-webkit-linear-gradient(top, black, black)"
      : "-webkit-linear-gradient(bottom, white, white",
  };
  const colorLetterText = {
    color: changeColor ? "#f2eedd" : "",
  };
  return (
    <div id="main" style={{ ...estyle, ...colorLetterText }}>
      {/*     <AddLink postLink={postLink} /> */}
      <div className="container">
        <div className="row main-row">
          <div className="col-4 col-12-medium">
            <section>
              <h2 style={h2}>{titleID?.[4]}</h2>
              <div>
                <div className="row">
                  <div className="col-6 col-12-small" key={data.id}>
                    <ul className="link-list">
                      {data[0]?.map((e, i) => (
                        <li key={i}>
                          <Link onClick={() => handleRedirect(e.nameurl)}>
                            {e.namelink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-6 col-12-small">
                    <ul className="link-list">
                      {data[1]?.map((e, i) => (
                        <li key={i}>
                          <Link onClick={() => handleRedirect(e.nameurl)}>
                            {e.namelink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <section>
              <h2 style={h2}>{titleID?.[5]}</h2>
              <div>
                <div className="row">
                  <div className="col-6 col-12-small">
                    <ul className="link-list">
                      {data[2]?.map((e, i) => (
                        <li key={i}>
                          <Link onClick={() => handleRedirect(e.nameurl)}>
                            {e.namelink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-6 col-12-small">
                    <ul className="link-list">
                      {data[3]?.map((e, i) => (
                        <li key={i}>
                          <Link onClick={() => handleRedirect(e.nameurl)}>
                            {e.namelink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <section>
              <h2 style={h2}>{titleID?.[6]}</h2>
              <div>
                <div className="row">
                  <div className="col-6 col-12-small">
                    <ul className="link-list">
                      {data[4]?.map((e, i) => (
                        <li key={i}>
                          <Link onClick={() => handleRedirect(e.nameurl)}>
                            {e.namelink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-6 col-12-small">
                    <ul className="link-list">
                      {data[5]?.map((e, i) => (
                        <li key={i}>
                          <Link onClick={() => handleRedirect(e.nameurl)}>
                            {e.namelink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-6 col-12-medium">
            <section>
              <h2 style={h2}>{titleID?.[7]}</h2>
              <p>{titleID?.[8]}</p>
              <ul className="big-image-list">
                <li>
                  <Link to="#">
                    <img src={hands} alt="" className="left" />
                  </Link>
                  <h3 style={h2}>Wash Hands</h3>
                  <p>
                    Wash your hands frequently with warm, soapy water for at
                    least 20 seconds or use hand sanitizer when sink is not
                    readily available.
                  </p>
                </li>
                <li>
                  <Link to="#">
                    <img src={mask} alt="" className="left" />
                  </Link>
                  <h3 style={h2}>Wear your face mask properly</h3>
                  <p>
                    Face masks are suggested in areas where social distancing
                    cannot be maintained. Your face covering should be tight
                    fitting and fully cover your nose and mouth.
                  </p>
                </li>
                <li>
                  <Link to="#">
                    <img src={ft} alt="" className="left" />
                  </Link>
                  <h3 style={h2}>Social Distance</h3>
                  <p>
                    Practice safe social distancing, which is allowing Link
                    minimum of 6 feet between you and another person as much as
                    possible
                  </p>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-6 col-12-medium">
            <article className="blog-post">
              <h2 style={h2}>{titleID?.[9]}</h2>
              <Link to="#">
                <img src={molding} alt="" className="top blog-post-image" />
              </Link>
              <h3 style={h2}>Thank you!</h3>
              <p>
                With all the challenges we face, we know you work hard at
                keeping us running. Thank you to everyone for doing all the
                little things and tackling big problems to support JAE as Link
                team. Without your help we would not be where we are. Continue
                the great work and let's strive to make each day better.
              </p>
              <footer className="controls"></footer>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
