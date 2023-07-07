import React from 'react'

import Txt from "../../txt";
import Header from "../../Header";
import Read from "../../read_more";
import MyComponent from "../../image";

export default function AboutUsSection() {
  return (
    <div className="app-container" id="page1">
      <MyComponent />
      <div className="div2">
        <Header />

        <Txt />
        <Read />
      </div>
    </div>
  );
}