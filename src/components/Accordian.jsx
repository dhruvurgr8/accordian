import React, { useState } from "react";
import data from "./data";
import "./app.css";
const Accordian = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const showAccordian = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };
  return (
    <>
      {data.map((accordian, index) => {
        return (
          <>
            <div className="accordian">
              <span></span>
              <p
                key={index}
                className="title"
                onClick={() => {
                  showAccordian(index);
                }}
              >
                {accordian.title}
                {selectedIndex != index ? (
                  <span class="material-symbols-outlined flex">
                    expand_more
                  </span>
                ) : (
                  <span class="material-symbols-outlined flex">
                    expand_less
                  </span>
                )}
              </p>
              <p className={selectedIndex == index ? "content" : "no-display"}>
                {accordian.content}
              </p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Accordian;
