import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 className="text-4xl font-semibold">Our Services</h2>
          <p>
            LWe offer a wide range of Digital Marketing Services in Chandigarh, India and Web Design & Development Services. 
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {props.data
            ? props.data.map((d, i) => (
                <div className="flex flex-col gap-2 justify-center items-center" key={i}>
                  {" "}
                  <i className={`${d.icon} bg-white h-44 w-44 rounded-full text-black flex items-center justify-center text-7xl`}></i>
                  <div className="service-desc">
                    <h3 className="font-semibold text-3xl">{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
