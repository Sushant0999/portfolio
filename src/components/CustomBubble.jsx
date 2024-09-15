// CustomBubble.js

import { useState, useEffect } from "react";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./ChildComponent";
import { data } from "./data";
import '../css/bubble.css'

export default function CustomBubble() {
  const [bubble, setBubble] = useState("");
  const options = {
    size: 100,
    minSize: 30,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 45,
    yRadius: 100,
    xRadius: 100,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5
  };

  useEffect(() => {
    const bubbles = document.querySelector("._2MD0k");
    const img = document.querySelectorAll(".childComponent img");
    img.forEach(
      (i) =>
        (i.ondragstart = () => {
          return false;
        })
    );
    const dragspeed = 2;
    let isDown = false;
    let startX;
    let startY;
    let scrollLeft;
    let scrollTop;

    bubbles.addEventListener("mousedown", (e) => {
      isDown = true;
      bubbles.classList.add("active");
      startX = e.pageX - bubbles.offsetLeft;
      startY = e.pageY - bubbles.offsetTop;
      scrollLeft = bubbles.scrollLeft;
      scrollTop = bubbles.scrollTop;
    });
    bubbles.addEventListener("mouseleave", () => {
      isDown = false;
      bubbles.classList.remove("active");
    });
    bubbles.addEventListener("mouseup", () => {
      isDown = false;
      bubbles.classList.remove("active");
    });
    bubbles.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - bubbles.offsetLeft;
      const y = e.pageY - bubbles.offsetTop;
      const walk = (x - startX) * dragspeed;
      const topwalk = (y - startY) * dragspeed;
      bubbles.scrollLeft = scrollLeft - walk;
      bubbles.scrollTop = scrollTop - topwalk;
    });
  }, []);

  const handleClick = (src) => {
    setBubble(src);
  };

  const children = data.map((item, i) => (
    <Child
      data={item}
      className="child"
      key={i}
      setClick={handleClick}
    />
  ));

  return (
    <>
      <BubbleUI key={1} options={options} className="myBubbleUI">
        {children}
      </BubbleUI>
      {/* will use this to show revelent project in which i used this technology */}
      <div style={{ marginTop: 50 }}>Clicked bubble: {bubble}</div>
    </>
  );
}
