import talking from "../../style/resource/bg/bg_talking.png";
function Sponsor({ displayNone }) {
  const { bg, sponsor } = displayNone;
  return (
    <section className="sponsor" style={bg ? { opacity: "0" } : {}}>
      <div className="sponsor-title">
        <img src={talking} alt="" />
        <h2 className="color-primary">贊助單位</h2>
      </div>
      <ul className="sponsor-item" style={sponsor ? { opacity: "0" } : {}}>
        <li>
          <div className="block"></div>
          <p className="color-dark-secondary">#版塊設計</p>
        </li>
        <li>
          <div className="tita"></div>
          <p className="color-dark-secondary">#鈦坦科技</p>
        </li>
        <li>
          <div className="kdan"></div>
          <p className="color-dark-secondary">#凱鈿科技</p>
        </li>
      </ul>
    </section>
  );
}

export default Sponsor;
