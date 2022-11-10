import { useState } from "react";
function LayoutSide() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div
      className={`layout-side ${menuToggle ? "show-layout" : "close-layout"}`}
    >
      <div className="menu-side"></div>
      <div
        className={`menu-btn ${menuToggle ? "menu-isOpen" : "menu-isClose"}`}
        onClick={() => setMenuToggle((state) => !state)}
      ></div>
      <ul className="menu-inner">
        <li>
          <div className="menu-item menu-item-info"></div>
          <p className="color-secondary">關卡資訊</p>
        </li>
        <li>
          <div className="menu-item menu-item-list"></div>
          <p className="color-secondary">作品列表</p>
        </li>
        <li>
          <div className="menu-item menu-item-strategy"></div>
          <p className="color-secondary">攻略資源</p>
        </li>
        <li>
          <div className="menu-item menu-item-job"></div>
          <p className="color-secondary">求職專區</p>
        </li>
      </ul>
    </div>
  );
}

export default LayoutSide;
