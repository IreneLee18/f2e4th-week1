import logo from "./style/resource/logo/logo.png";
import userBtn from "./style/resource/btn/btn_user.png";
import f2e from "./style/resource/character/character_f2e.gif";
import ui from "./style/resource/character/character_ui.gif";
import team from "./style/resource/character/character_team.gif";
import { useState, useEffect } from "react";
import Home from "./component/Home/HomePage";
import LayoutSide from "./component/LayoutSide/LayoutSide";
import Confuse from "./component/Confuse/Confuse";
import Participant from "./component/Participant/Participant";
import Challenge from "./component/Challenge/Challenge";
import {
  mapInit,
  homeInit,
  homeNoneInit,
  confuseInit,
  confuseNoneInit,
  confuseFooterCssInit,
  participantNoneInit,
  challengeNoneInit,
  instructionNoneInit,
  awardNoneInit,
  sponsorNoneInit,
  finishNoneInit,
  finishInit,
} from "./utility/Init";
import Instruction from "./component/Instruction/Instruction";
import Award from "./component/Award/Award";
import Sponsor from "./component/Sponsor/Sponsor";
import Finish from "./component/Finish/Finish";
const scroll = 801;
function App() {
  const [map, setMap] = useState(mapInit);
  const [home, setHome] = useState(homeInit);
  const [smSize, setSmSize] = useState(false);
  const [homeNone, setHomeNone] = useState({
    bg: false,
    other: false,
  });
  const [confuse, setConfuse] = useState(confuseInit);
  const [confuseNone, setConfuseNone] = useState(confuseNoneInit);
  const [mainConfuseFooter, setMainConfuseFooter] =
    useState(confuseFooterCssInit);
  const [participantNone, setParticipantNone] = useState(participantNoneInit);
  const [challengeNone, setChallengeNone] = useState(challengeNoneInit);
  const [instructionNone, setInstructionNone] = useState(instructionNoneInit);
  const [awardNone, setAwardNone] = useState(awardNoneInit);
  const [sponsorNone, setSponsorNone] = useState(sponsorNoneInit);
  const [finishNone, setFinishNone] = useState(finishNoneInit);
  const [finish, setFinish] = useState(finishInit);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setHome(homeInit);
        setHomeNone(homeNoneInit);
        setConfuseNone(confuseNoneInit);
        setSmSize(true);
        setMap(mapInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll &&
        Math.ceil(window.scrollY) < scroll * 2
      ) {
        setHome((state) => ({
          ...state,
          frames: { title: "", ready1: false, ready2: false, ready3: true },
          decorate: {
            decorate1: {
              left: "200px",
              top: "350px",
              backgroundSize: "80%",
            },
            decorate2: {
              right: "100px",
              top: "350px",
              backgroundSize: "80%",
            },
          },
        }));
        setHomeNone(homeNoneInit);
        setConfuseNone(confuseNoneInit);
        setSmSize(true);
        setMap(mapInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 2 &&
        Math.ceil(window.scrollY) < scroll * 3
      ) {
        setHome((state) => ({
          ...state,
          frames: { title: "", ready1: false, ready2: true, ready3: false },
          decorate: {
            decorate1: {
              left: "300px",
              top: "350px",
              backgroundSize: "70%",
            },
            decorate2: {
              right: "200px",
              top: "350px",
              backgroundSize: "70%",
            },
          },
        }));
        setHomeNone(homeNoneInit);
        setConfuseNone(confuseNoneInit);
        setSmSize(true);
        setMap(mapInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 3 &&
        Math.ceil(window.scrollY) < scroll * 4
      ) {
        setHome((state) => ({
          ...state,
          frames: {
            title: "GO!",
            titleStyle: { paddingLeft: "95px" },
            ready1: true,
            ready2: false,
            ready3: false,
          },
          decorate: {
            decorate1: {
              display: "none",
            },
            decorate2: {
              display: "none",
            },
          },
        }));
        setHomeNone(homeNoneInit);
        setConfuseNone(confuseNoneInit);
        setSmSize(true);
        setMap(mapInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 4 &&
        Math.ceil(window.scrollY) < scroll * 5
      ) {
        setHomeNone({
          bg: false,
          other: true,
        });
        setConfuseNone(confuseNoneInit);
        setSmSize(true);
        setMap(mapInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 5 &&
        Math.ceil(window.scrollY) < scroll * 6
      ) {
        setHomeNone({
          bg: true,
          other: true,
        });
        setConfuseNone(confuseNoneInit);
        setSmSize(true);
        setMap(mapInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 6 &&
        Math.ceil(window.scrollY) < scroll * 7
      ) {
        setConfuseNone(false);
        setSmSize(true);
        setSmSize(true);
        setMap({
          top: "0px",
          left: "35px",
        });
        setConfuse(confuseInit);
        setMainConfuseFooter(confuseFooterCssInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 7 &&
        Math.ceil(window.scrollY) < scroll * 8
      ) {
        setConfuse({ cool: true, wish: false, start: false });
        setConfuseNone(false);
        setSmSize(true);
        setMainConfuseFooter({
          left: {
            left: "300px",
            backgroundSize: "70%",
          },
          right: {
            right: "300px",
            backgroundSize: "70%",
          },
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 8 &&
        Math.ceil(window.scrollY) < scroll * 9
      ) {
        setConfuse({ cool: true, wish: true, start: false });
        setConfuseNone(false);
        setSmSize(true);
        setMainConfuseFooter({
          left: {
            left: "400px",
            bottom: "-85px",
            backgroundSize: "50%",
          },
          right: {
            right: "400px",
            bottom: "-85px",
            backgroundSize: "50%",
          },
        });
        setChallengeNone(challengeNoneInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 9 &&
        Math.ceil(window.scrollY) < scroll * 10
      ) {
        setConfuse({ cool: true, wish: true, start: true });
        setMainConfuseFooter({
          left: {
            display: "none",
          },
          right: {
            display: "none",
          },
        });
        setConfuseNone(false);
        setSmSize(true);
        setChallengeNone(challengeNoneInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 10 &&
        Math.ceil(window.scrollY) < scroll * 11
      ) {
        setConfuseNone(true);
        setSmSize(false);
        setParticipantNone(participantNoneInit);
        setChallengeNone(challengeNoneInit);
        setMap({
          top: "0px",
          left: "35px",
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 11 &&
        Math.ceil(window.scrollY) < scroll * 12
      ) {
        setSmSize(false);
        setParticipantNone({ participant: false, btn: true });
        setChallengeNone(challengeNoneInit);
        setMap({
          top: "9px",
          left: "98px",
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 12 &&
        Math.ceil(window.scrollY) < scroll * 13
      ) {
        setSmSize(false);
        setParticipantNone({ participant: false, btn: false });
        setChallengeNone(challengeNoneInit);
        setMap({
          top: "9px",
          left: "98px",
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 13 &&
        Math.ceil(window.scrollY) < scroll * 14
      ) {
        setSmSize(false);
        setParticipantNone(participantNoneInit);
        setChallengeNone(challengeNoneInit);
        setMap({
          top: "9px",
          left: "98px",
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 14 &&
        Math.ceil(window.scrollY) < scroll * 15
      ) {
        setSmSize(true);
        setMap({
          top: "9px",
          left: "169px",
        });
        setChallengeNone({
          challenge: false,
          week1: true,
          week2: true,
          week3: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 15 &&
        Math.ceil(window.scrollY) < scroll * 16
      ) {
        setSmSize(true);
        setMap({
          top: "9px",
          left: "169px",
        });
        setChallengeNone({
          challenge: false,
          week1: false,
          week2: true,
          week3: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 16 &&
        Math.ceil(window.scrollY) < scroll * 17
      ) {
        setSmSize(true);
        setMap({
          top: "9px",
          left: "169px",
        });
        setChallengeNone({
          challenge: false,
          week1: true,
          week2: false,
          week3: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 17 &&
        Math.ceil(window.scrollY) < scroll * 18
      ) {
        setSmSize(true);
        setMap({
          top: "9px",
          left: "169px",
        });
        setChallengeNone({
          challenge: false,
          week1: true,
          week2: true,
          week3: false,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 18 &&
        Math.ceil(window.scrollY) < scroll * 19
      ) {
        setSmSize(false);
        setMap({
          top: "9px",
          left: "169px",
        });
        setChallengeNone(challengeNoneInit);
        setInstructionNone(instructionNoneInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 19 &&
        Math.ceil(window.scrollY) < scroll * 20
      ) {
        setSmSize(true);
        setMap({
          top: "53px",
          left: "160px",
        });
        setInstructionNone({
          instruction: false,
          signup: true,
          start: true,
          upload: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 20 &&
        Math.ceil(window.scrollY) < scroll * 21
      ) {
        setSmSize(true);
        setMap({
          top: "53px",
          left: "160px",
        });
        setInstructionNone({
          instruction: false,
          signup: false,
          start: true,
          upload: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 21 &&
        Math.ceil(window.scrollY) < scroll * 22
      ) {
        setSmSize(true);
        setMap({
          top: "53px",
          left: "160px",
        });
        setInstructionNone({
          instruction: false,
          signup: false,
          start: false,
          upload: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 22 &&
        Math.ceil(window.scrollY) < scroll * 23
      ) {
        setSmSize(true);
        setMap({
          top: "53px",
          left: "160px",
        });
        setInstructionNone({
          instruction: false,
          signup: false,
          start: false,
          upload: false,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 23 &&
        Math.ceil(window.scrollY) < scroll * 24
      ) {
        setSmSize(false);
        setMap({
          top: "53px",
          left: "160px",
        });
        setInstructionNone(instructionNoneInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 24 &&
        Math.ceil(window.scrollY) < scroll * 25
      ) {
        setSmSize(false);
        setMap({
          top: "53px",
          left: "160px",
        });
        setAwardNone(awardNoneInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 25 &&
        Math.ceil(window.scrollY) < scroll * 26
      ) {
        setSmSize(false);
        setMap({
          top: "75px",
          left: "112px",
        });
        setAwardNone({
          bg: false,
          highttext: true,
          award: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 26 &&
        Math.ceil(window.scrollY) < scroll * 27
      ) {
        setSmSize(false);
        setMap({
          top: "75px",
          left: "112px",
        });
        setAwardNone({
          bg: false,
          highttext: false,
          award: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 27 &&
        Math.ceil(window.scrollY) < scroll * 28
      ) {
        setSmSize(true);
        setMap({
          top: "75px",
          left: "112px",
        });
        setAwardNone({
          bg: false,
          highttext: true,
          award: false,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 28 &&
        Math.ceil(window.scrollY) < scroll * 29
      ) {
        setSmSize(true);
        setMap({
          top: "75px",
          left: "112px",
        });
        setAwardNone(awardNoneInit);
        setSponsorNone(sponsorNoneInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 29 &&
        Math.ceil(window.scrollY) < scroll * 30
      ) {
        setSmSize(true);
        setMap({
          top: "106px",
          left: "72px",
        });
        setSponsorNone({
          bg: false,
          sponsor: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 30 &&
        Math.ceil(window.scrollY) < scroll * 31
      ) {
        setSmSize(true);
        setMap({
          top: "106px",
          left: "72px",
        });
        setSponsorNone({
          bg: false,
          sponsor: false,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 31 &&
        Math.ceil(window.scrollY) < scroll * 32
      ) {
        setSmSize(true);
        setMap({
          top: "106px",
          left: "72px",
        });
        setSponsorNone(sponsorNoneInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 32 &&
        Math.ceil(window.scrollY) < scroll * 33
      ) {
        setSmSize(true);
        setMap({
          top: "106px",
          left: "72px",
        });
        setSponsorNone(sponsorNoneInit);
      } else if (
        Math.ceil(window.scrollY) >= scroll * 33 &&
        Math.ceil(window.scrollY) < scroll * 34
      ) {
        setSmSize(true);
        setFinish(finishInit);
        setFinishNone({
          bg: false,
          finishline: true,
          ribbon: true,
          decorate: true,
          applicant: false,
          door: true,
          signup: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 34 &&
        Math.ceil(window.scrollY) < scroll * 35
      ) {
        setSmSize(false);
        setFinish({
          decorate1: { left: "100px" },
          decorate2: { right: "100px" },
        });
        setFinishNone({
          bg: false,
          finishline: false,
          ribbon: true,
          decorate: false,
          applicant: false,
          door: false,
          signup: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 35 &&
        Math.ceil(window.scrollY) < scroll * 36
      ) {
        setSmSize(false);
        setFinish({
          decorate1: { left: "300px", backgroundSize: "60%" },
          decorate2: { right: "100px", backgroundSize: "60%" },
        });
        setFinishNone({
          bg: false,
          finishline: false,
          ribbon: false,
          decorate: false,
          applicant: false,
          door: false,
          signup: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 36 &&
        Math.ceil(window.scrollY) < scroll * 37
      ) {
        setSmSize(false);
        setFinishNone({
          bg: false,
          finishline: false,
          ribbon: false,
          decorate: true,
          applicant: false,
          door: false,
          signup: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 37 &&
        Math.ceil(window.scrollY) < scroll * 38
      ) {
        setSmSize(false);
        setFinishNone({
          bg: false,
          finishline: false,
          ribbon: false,
          decorate: true,
          applicant: true,
          door: false,
          signup: true,
        });
      } else if (
        Math.ceil(window.scrollY) >= scroll * 38 &&
        Math.ceil(window.scrollY) < scroll * 39
      ) {
        setSmSize(false);
        setFinishNone({
          bg: false,
          finishline: false,
          ribbon: false,
          decorate: true,
          applicant: true,
          door: true,
          signup: true,
        });
      }else if (
        Math.ceil(window.scrollY) >= scroll * 39 &&
        Math.ceil(window.scrollY) < scroll * 40
      ) {
        setSmSize(false);
        setFinishNone({
          bg: false,
          finishline: false,
          ribbon: false,
          decorate: true,
          applicant: true,
          door: true,
          signup: false,
        });
      }
    });
  });
  return (
    <>
      <header>
        <img src={logo} alt="" style={homeNone.bg ? { opacity: "1" } : {}} className={finishNone.signup?'':'d-none'} />
        <img src={userBtn} alt="" />
      </header>
      <main>
        <LayoutSide />
        <Home css={home} displayNone={homeNone} />
        <Confuse css={confuse} displayNone={confuseNone} />
        <Participant displayNone={participantNone} />
        <Challenge displayNone={challengeNone} />
        <Instruction displayNone={instructionNone} />
        <Award displayNone={awardNone} />
        <Sponsor displayNone={sponsorNone} />
        <Finish css={finish} displayNone={finishNone} />
        <section
          // className={`main ${confuseNone ? "" : "main-50vw"} ${
          //   challengeNone.challenge ? "" : "main-40vw"
          // } ${instructionNone.instruction ? "" : "main-50vw"} ${
          //   awardNone.award ? "" : "main-50vw"
          // } ${sponsorNone.bg ? "" : "main-50vw"} `}
          className={`main ${smSize ? "main-50vw" : ""} ${
            finishNone.bg ? "" : "main-65vw"
          }`}
        >
          <div className="main-main">
            <ul className={`applicant ${finishNone.applicant ? "d-none" : ""}`}>
              <li>
                <div style={homeNone.other ? { display: "none" } : {}}>
                  <p className="color-primary">前端工程師</p>
                  <p className="color-white">920</p>
                </div>
                <img src={f2e} alt="f2e" />
              </li>
              <li>
                <div style={homeNone.other ? { display: "none" } : {}}>
                  <p className="color-primary">UI設計師</p>
                  <p className="color-white">110</p>
                </div>
                <img src={ui} alt="ui" />
              </li>
              <li>
                <div style={homeNone.other ? { display: "none" } : {}}>
                  <p className="color-primary">團體組</p>
                  <p className="color-white">41</p>
                </div>
                <img src={team} alt="team" />
              </li>
            </ul>
            <div className={finishNone.signup?'d-none':'signup'}>
              <img src={logo} alt="" />
              <div className="signup-btn-group">
                <div className="signup-hand"></div>
                <div className="signup-btn"></div>
              </div>
              <h2 className="color-hight">立即報名</h2>
            </div>
          </div>
          <ul className="main-footer">
            <li
              className="main-footer-left"
              style={mainConfuseFooter.left}
            ></li>
            <li
              className={`main-footer-sponsor-left ${
                sponsorNone.bg ? "opacity-0" : ""
              }`}
              style={
                sponsorNone.sponsor
                  ? {}
                  : { backgroundSize: "80%", bottom: "-450px", left: "250px" }
              }
            ></li>
            <li className="main-footer-center"></li>
            <li
              className={`main-footer-sponsor-right ${
                sponsorNone.bg ? "opacity-0" : ""
              }`}
              style={
                sponsorNone.sponsor
                  ? {}
                  : { backgroundSize: "80%", bottom: "-450px", right: "200px" }
              }
            ></li>
            <li
              className="main-footer-right"
              style={mainConfuseFooter.right}
            ></li>
          </ul>
        </section>
      </main>
      <footer className={finishNone.signup?'':'d-none'}>
        <div className="map">
          <div className={`map-map ${finishNone.bg ? "" : "d-none"}`}></div>
          <div
            className={`map-now ${finishNone.bg ? "" : "d-none"}`}
            style={map}
          ></div>
          <div className="map-finish"></div>
        </div>
        <div className="join">
          <div className="join-text color-primary">JOIN</div>
          <div className="join-hand"></div>
          <div className="join-us"></div>
        </div>
      </footer>
    </>
  );
}

export default App;
