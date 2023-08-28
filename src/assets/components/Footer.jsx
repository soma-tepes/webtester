import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";



const Footer = () => {

  const { changeColor, setChangeColor } = useContext(AppContext);

  

  return (
    <div id="footer-wrapper" style={{  background : changeColor ? "black" : "" }}>
      <div class="container">
        <div class="row">
          <div class="col-8 col-12-medium">
            <section>
              <h2>Popular Links</h2>
              <div>
                <div class="row">
                  <div class="col-3 col-6-medium col-12-small">
                    <ul class="link-list">
                      <li>
                        <a href="http://webf201s.sgs.jae.co.jp/">SAP</a>
                      </li>
                      <li>
                        <a href="https://teams.microsoft.com/">
                          Microsoft Teams
                        </a>
                      </li>
                      <li>
                        <a href="https://jaeoregon.samanage.com/login">
                          IT Helpdesk
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-3 col-6-medium col-12-small">
                    <ul class="link-list">
                      <li>
                        <a href="https://www.jae.com/en/corporate/profile/philosophy/">
                          JAE Philosophy
                        </a>
                      </li>
                      <li>
                        <a href="https://www.jae.com/en/connectors/series/?search_ext_col_27[]=A1050">
                          JAE Automotive Connectors
                        </a>
                      </li>
                      <li>
                        <a href="https://www.jae.com/en/csr/">
                          JAE Sustainability
                        </a>
                      </li>
                      <li>
                        <a href="http://jaeoregon.com/">JAE Oregon</a>
                      </li>
                      <li>
                        <a href="http://www.jae.com/en/">JAE</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="col-4 col-12-medium">
            <section>
              <h2>Need Help</h2>
              <p>
                If you need have a technical issue please submit a ticket, email
                us or send us a chat in Teams"
                <a href="https://jaeoregon.samanage.com/login" class="button">
                  Submit a ticket
                </a>
              </p>
            </section>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div id="copyright">
              &copy; JAE Oregon, Inc. All rights reserved. | Design:{" "}
              <a href="http://html5up.net">HTML5 UP</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
