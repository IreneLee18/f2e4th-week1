import logo from "../../../style/resource/logo/logo_text.png";
function HomePage({ css }) {
  const { frames, decorate } = css;
  return (
    <>
      <section className="home">
        <div className="home-background"></div>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h4 className="color-white">互動式網頁設計</h4>
        </div>
        <ul className="decorate">
          <li className="decorate-1" style={decorate.decorate1}></li>
          <li className="decorate-2" style={decorate.decorate2}></li>
        </ul>
        <div
          className="frame"
          style={
            frames.none ? { display: "none" } : {}}
        >
          <h4 className="color-hight" style={frames.titleStyle}>
            {frames.title}
          </h4>
          <ul className="ready-frame">
            <li className={`ready ${frames.ready3 ? "ready-3" : ""}`}></li>
            <li className={`ready ${frames.ready2 ? "ready-2" : ""}`}></li>
            <li className={`ready ${frames.ready1 ? "ready-1" : ""}`}></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default HomePage;
