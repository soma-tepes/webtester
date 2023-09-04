import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";
import useFetchData from "../../utils/hookEfect";
import useStore, { calculateTitlesById } from "../../utils/store";

const Footer = () => {
  const { changeColor, setChangeColor } = useContext(AppContext);
  const { fetchData } = useFetchData();
  const { data } = useStore();
  const titlesById = calculateTitlesById(data);

  return (
    <div id="footer-wrapper" style={{ background: changeColor ? "black" : "" }}>
      <div className="container">
        <div className="row">
          <div className="col-8 col-12-medium">
            <section>
              <h2>{titlesById?.[10]}</h2>
              <div>
                <div className="row">
                  <div className="col-3 col-6-medium col-12-small">
                    <ul className="link-list">
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
                  <div className="col-3 col-6-medium col-12-small">
                    <ul className="link-list">
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
          <div className="col-4 col-12-medium">
            <section>
              <h2>{titlesById?.[9]}</h2>
              <p>
                If you need have a technical issue please submit a ticket, email
                us or send us a chat in Teams"
                <a
                  href="https://jaeoregon.samanage.com/login"
                  className="button"
                >
                  Submit a ticket
                </a>
              </p>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div id="copyright">
              {titlesById?.[11]}
              {/*  <a href="http://html5up.net">HTML5 UP</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
