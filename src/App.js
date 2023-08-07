import "./App.css";
import menu from "./menu.svg";
import trophy from "./trophy.png";
function App() {
  const data = [
    "Drugs",
    "Articles",
    "News",
    "Quizzes",
    "Surveys",
    "Webinars",
    "Guidelines",
    "Podcasts",
    "Conferences",
  ];

  const btnData = [
    "Anesthesia",

    "Cardiology",

    "Critical Care",
    "Dentistry",

    "Dermatology",

    "Diabetology",
  ];
  const otherData = [
    {
      icon: 1,
      name: "Drug Database",
    },
    {
      icon: 1,
      name: "Webinars",
    },
    {
      icon: 1,
      name: "Drug Interaction",
    },
    {
      icon: 1,
      name: "Madical calculator",
    },
    {
      icon: 1,
      name: "Articles",
    },
    {
      icon: 1,
      name: "Quizzes",
    },
    {
      icon: 1,
      name: "Diseases Database",
    },
    {
      icon: 1,
      name: "Survays",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="logo"
          src="https://hidocdr.com/static/media/img-main.8dd53ff3d39d4c24b3df.jpg"
          alt="no img"
        />
        <div className="nav-btns">
          {data.map((item, index) => {
            return (
              <>
                <p key={index}>{item}</p> |
              </>
            );
          })}
        </div>
        <div className="profile-wrap">
          <img src={menu} alt="menu" />
          <div className="score">
            <img src={trophy} height={"20px"} alt="trophy" /> 252
          </div>
          <div className="profile">A</div>
        </div>
      </header>
      <h1 className="second-header">
        Your one-stop Solution for <span>MEDICAL LEARNING & UPDATES</span>
      </h1>
      <div className="third-header">
        <h1>
          Get Knowledge of the <span>APPROVED DRUGS</span>
        </h1>
        <div class="drug-new-input">
          <input class="new-input" placeholder="Enter Drug Type" value="" />
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            class="search-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
          </svg>
        </div>
      </div>
      <div className="fourth-container">
        <p>
          Dailymed Drug Database The DailyMed database contains 143072 labeling
          submitted to the Food and Drug Administration (FDA) by companies.
          DailyMed does not contain a complete listing of labeling for
          FDA-regulated products (eg, labeling that is not submitted to the
          FDA).
        </p>
        <div className="btn-wrap">
          {btnData.map((data) => {
            return <button className="btn">{data}</button>;
          })}
        </div>
      </div>
      <div className="table-wrap">
        <div className="box">
          <div className="box-header">Drug Data</div>
          <div className="box-conent">
            <p>1000</p>
            <p>1000</p>
            <p>1000</p>
          </div>
        </div>
        <div className="box">
          <div className="box-header">Drug Details</div>
          <div className="box-conent">
            <p>1000</p>
            <p>1000</p>
            <p>1000</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="ft-wrap">
          <div className="first-ftr">
            <img
              className="logo"
              src="https://hidoc.co/assets/img/logo/logo3.png"
              alt="no img"
            />
            <p>Fastest Growing Medical Platform for Doctors</p>

            <ul>
              <li className="li">
                <i class="fa fa-facebook"></i>
              </li>
              <li className="li">
                <i class="fa fa-instagram"></i>
              </li>
              <li className="li">
                <i class="fa fa-youtube-play"></i>
              </li>
              <li className="li">
                <i class="fa fa-linkedin"></i>
              </li>
            </ul>
          </div>
          <div className="second-ftr">
            <h4>REACH US</h4>
            <p>Please contact below details for any other information.</p>

            <p className="detalis">
              <span>Email: </span>info@hidoc.com
            </p>
            <p className="detalis">
              <span>Address: </span>
              Hidoc Dr.Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE, 19808,
              United States
            </p>
          </div>
          <div className="third-ftr">
            <h4>HIDOC DR. FEATURES</h4>
            <div className="other-content">
              {otherData.map((data) => {
                return (
                  <div className="other-box">
                    {data.icon}
                    <p>{data.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="last-ft">
          <p className="copyright">
            © Copyright <strong>2022 Infedis Infotech LLP.</strong>
          </p>
          <p className="copyright">Terms & Condition | Privecy Policy</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
