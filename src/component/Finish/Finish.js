function Finish({ css, displayNone }) {
  const { decorate1, decorate2 } = css;
  const { bg, finishline, ribbon, decorate, door } = displayNone;
  return (
    <>
      <section className={`finish ${bg ? "opacity-0" : ""}`}>
        <div className={`finish-background ${door ? "opacity-0" : ""}`}></div>
        <ul className={`decorate ${decorate ? "opacity-0" : ""}`}>
          <li
            className="decorate-1"
            style={decorate1}
          ></li>
          <li
            className="decorate-2"
            style={decorate2}
          ></li>
          <li
            className={`decorate-3 ${finishline ? "opacity-0" : ""}`}
            style={ribbon ? {} : { width: "48%" }}
          ></li>
          <li
            className={`decorate-4 ${finishline ? "opacity-0" : ""}`}
            style={ribbon ? {} : { width: "48%" }}
          ></li>
        </ul>
      </section>
    </>
  );
}

export default Finish;
