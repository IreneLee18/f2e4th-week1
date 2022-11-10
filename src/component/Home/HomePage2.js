import HomePage from "./component/HomePage";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const home1Css = {
  frames: {
    title: "READY?",
    titleStyle: {},
    ready1: true,
    ready2: true,
    ready3: true,
    none: false,
  },
  decorate: {
    decorate1: {
      left: "100px",
      top: "350px",
    },
    decorate2: {
      right: "100px",
      top: "350px",
    },
  },
};
const home2Css = {
  frames: {
    title: "",
    titleStyle: {},
    ready1: false,
    ready2: false,
    ready3: true,
    none: false,
  },
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
};
const home3Css = {
  frames: {
    title: "",
    titleStyle: {},
    ready1: false,
    ready2: true,
    ready3: false,
    none: false,
  },
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
};
const home4Css = {
  frames: {
    title: "GO",
    titleStyle: { paddingLeft: "95px" },
    ready1: true,
    ready2: false,
    ready3: false,
    none: false,
  },
  decorate: {
    decorate1: {
      display: "none",
    },
    decorate2: {
      display: "none",
    },
  },
};
const home5Css = {
  frames: {
    title: "",
    titleStyle: {},
    ready1: false,
    ready2: true,
    ready3: false,
    none: true,
  },
  decorate: {
    decorate1: {
      display: "none",
    },
    decorate2: {
      display: "none",
    },
  },
};
// gsap 動畫
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const home1 = useRef(null);
  const home2 = useRef(null);
  const home3 = useRef(null);
  const home4 = useRef(null);
  const home5 = useRef(null);
  useEffect(() => {
    const scrollCover = gsap.timeline({
      scrollTrigger: {
        trigger: ".cover", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        pin: true,
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });
    //跟設定css 一樣  如果畫面不小於 768px 執行
    gsap.to(home2.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: home2.current, //觸發得物件
        start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
        end: `+=${window.innerHeight}`, //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
        pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
        scrub: true, // 物件動畫根據卷軸捲動程度跑
        toggleClass: "active", //  class名稱 須為字串
        markers: true, // 顯示標記
      },
    });
  }, []);
  return (
    <>
      <section ref={home1}>
        <HomePage css={home1Css} />
      </section>
      <section ref={home2}>
        <HomePage css={home2Css} />
      </section>
      <section ref={home3}>
        <HomePage css={home3Css} />
      </section>
      <section ref={home4}>
        <HomePage css={home4Css} />
      </section>
      <section ref={home5}>
        <HomePage css={home5Css} />
      </section>
    </>
  );
}

export default Home;
