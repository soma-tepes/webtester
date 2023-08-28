import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../Context/AppContext";

import hands  from '../css/images/hands.jpg'
import mask from '../css/images/mask.jpg'
import ft from '../css/images/6ft.jpg'
import molding from '../css/images/molding.jpg'


const Links = () => {
  const [linkUrl, setlinkUrl] = useState([])
  const { changeColor, setChangeColor } = useContext(AppContext);

  const BASE_URL = `http://localhost:3000/api/v1/url/search/`;
  const endpoints = ['a', 'b', 'c', 'd', 'e','f'];

  const petitionlink = () => {
    Promise.all(
      endpoints.map(endpoint =>
        axios
          .get(`${BASE_URL}${endpoint}`)
          .then(res => res.data.user)
          .catch(error => console.error(error))
      )
    ).then(data => setlinkUrl(data));
  };


  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    petitionlink()
  }, [])

 const h2 = { 
  color: changeColor ? 
  '#008ead':
  ''
 }
 
  const estyle = {
    backgroundImage: changeColor
      ?"-webkit-linear-gradient(top, black, black)"
      :  "-webkit-linear-gradient(bottom, white, white" ,
  };
  const colorLetterText = { 
    color: changeColor ? 
    '#f2eedd':
    ''
   }
  return (

    <div id="main" style={{ ...estyle, ...colorLetterText}}  >
      {/*     <AddLink postLink={postLink} /> */}
      <div className="container">
        <div className="row main-row">
          <div className="col-4 col-12-medium">
            <section>
              <h2 style={h2}>Oregon Resources</h2>
              <div>
                <div className="row">
                  <div className="col-6 col-12-small" key={linkUrl.id}>
                    <ul className="link-list">
                      {/*  <li>
                        <Link to="http://10.131.17.30/#!/view/all-production">
                          Vorne OEE
                        </Link>
                      </li>
                      <li>
                        <Link to="http://orsqlsvr/mcx/" target="_blank">
                          Maintenance Connection Express
                        </Link>
                      </li>
                      <li>
                        <Link to="https://jor-ex1/owa">Outlook Web Access</Link>
                      </li>
                      <li>
                        <Link to="https://jaeoregon.on.spiceworks.com/portal">
                          IT Helpdesk
                        </Link>
                      </li>
                      <li>
                        <Link to="https://forms.office.com/r/qsyTKgrT6e">
                          Safety and Incident Reporting{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="http://ordbsvr2/WashBookMolds">
                          WashbookMolds
                        </Link>
                      </li> */}

                      {
                        linkUrl[0] && linkUrl[0].map(e =>
                          <li>

                            <Link onClick={() => handleRedirect(e.nameurl)}>
                              {e.namelink}
                            </Link>

                          </li>
                        )

                      }

                    </ul>
                  </div>
                  <div className="col-6 col-12-small">
                    <ul className="link-list">
                      {
                        linkUrl[1] && linkUrl[1].map(e =>
                          <li>
                            <Link onClick={() => handleRedirect(e.nameurl)}>
                              {e.namelink}
                            </Link>

                          </li>
                        )

                      }
                   {/*    <li>
                        <Link to="https://www.workforcenow.adp.com">ADP WFN</Link>
                      </li>
                      <li>
                        <Link to="https://jaeoregon.litmos.com/account/login/">
                          Litmos
                        </Link>
                      </li>
                      <li>
                        <Link to="https://us.ctmsmart.com/">Concur</Link>
                      </li>
                      <li>
                        <Link to="http://orsqlsvr/mc_web/onsite/mc_login.htm">
                          Maintenance Connection Technician
                        </Link>
                      </li>
                      <li>
                        <Link to="https://adpeet2.adp.com/112lc2p/logon">
                          ADP Time and Attendance
                        </Link>
                      </li>
                      <li>
                        <Link to="H:\Public\Benefits\Benefit 2023 to 2024">
                          2023 ADP Benefits rates comparison
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <section>
              <h2 style={h2}>Headquarter Resources</h2>
              <div>
                <div className="row">
                  <div className="col-6 col-12-small">
                    <ul className="link-list">
                    {
                        linkUrl[2] && linkUrl[2].map(e =>
                          <li>
                            <Link onClick={() => handleRedirect(e.nameurl)}>
                              {e.namelink}
                            </Link>

                          </li>
                        )

                      }
                     {/*  <li>
                        <Link to="http://webf201s.sgs.jae.co.jp/">SAP</Link>
                      </li>
                      <li>
                        <Link to="https://teams.microsoft.com/">
                          Microsoft Teams
                        </Link>
                      </li>
                      <li>
                        <Link to="http://aeensv1c.aee.jae.co.jp/inavi/service">
                          JAE e-Learning
                        </Link>
                      </li>
                      <li>
                        <Link to="http://tsvda-web.jae.co.jp/cqnet/">CQ Net</Link>
                      </li>
                      <li>
                        <Link to="http://jaew-svr/JAE/">HQ Intranet</Link>
                      </li> */}
                    </ul>
                  </div>
                  <div className="col-6 col-12-small">
                    <ul className="link-list">
                    {
                        linkUrl[3] && linkUrl[3].map(e =>
                          <li>
                            <Link onClick={() => handleRedirect(e.nameurl)}>
                              {e.namelink}
                            </Link>

                          </li>
                        )

                      }
                {/*       <li>
                        <Link to="ContactInfo/JAEOR_ExtList.pdf">
                          Oregon Phone List
                        </Link>
                      </li>
                      <li>
                        <Link to="ContactInfo/JAETJ_ExtList.pdf">
                          Tijuana Phone List
                        </Link>
                      </li>
                      <li>
                        <Link to="ContactInfo/JAEUS_ExtList.pdf">
                          Irvine and Detroit Phone List
                        </Link>
                      </li>
                      <li>
                        <Link to="ContactInfo/JAEEU_ExtList.pdf">
                          Europe Phone List
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Other Phone Lists</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <section>
              <h2 style={h2}>Tijuana Resources</h2>
              <div>
                <div className="row">
                  <div className="col-6 col-12-small">
                    <ul className="link-list">
                    {
                        linkUrl[4] && linkUrl[4].map(e =>
                          <li>
                            <Link onClick={() => handleRedirect(e.nameurl)}>
                              {e.namelink}
                            </Link>

                          </li>
                        )

                      }
                      {/* <li>
                        <Link to="https://jaeoregon.on.spiceworks.com/portal">
                          IT Helpdesk
                        </Link>
                      </li>
                      <li>
                        <Link to="https://jor-ex1/owa">Outlook Web Access</Link>
                      </li>
                      <li>
                        <Link to="https://www.maintenanceconnection.com/mcv18/online/mc_login_form.asp?">
                          Maintenance Connection
                        </Link>
                      </li>
                      <li>
                        <Link to="http://webf201s.sgs.jae.co.jp/">SAP</Link>
                      </li>
                      <li>
                        <Link to="https://teams.microsoft.com/">
                          Microsoft Teams
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                  <div className="col-6 col-12-small">
                    <ul className="link-list">
                    {
                        linkUrl[5] && linkUrl[5].map(e =>
                          <li>
                            <Link onClick={() => handleRedirect(e.nameurl)}>
                              {e.namelink}
                            </Link>

                          </li>
                        )

                      }
                     {/*  <li>
                        <Link to="PDF/TJNewsletter.pdf">Conexion</Link>
                      </li>
                      <li>
                        <Link to="http://10.131.33.179:5000/sharing/hJ6rULMQO">
                          Traceability
                        </Link>
                      </li>
                      <li>
                        <Link to="ContactInfo/JAEUS_ExtList.pdf">
                          Irvine and Detroit Phone List
                        </Link>
                      </li>
                      <li>
                        <Link to="ContactInfo/JAEEU_ExtList.pdf">
                          Europe Phone List
                        </Link>
                      </li>
                      <li>
                        <Link to="https://us.ctmsmart.com/">Concur</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-6 col-12-medium">
            <section>
              <h2 style={h2}>Covid Preventive Measures</h2>
              <p>Help keep our workplace safe</p>
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
                    Practice safe social distancing, which is allowing Link minimum
                    of 6 feet between you and another person as much as possible
                  </p>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-6 col-12-medium">
            <article className="blog-post">
              <h2 style={h2}>Thank you for being the best part of JAE!</h2>
              <Link to="#">
                <img
                  src={molding}
                  alt=""
                  className="top blog-post-image"
                />
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
