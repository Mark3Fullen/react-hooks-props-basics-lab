import { property } from "lodash";
import React from "react";
import user from "../data/user";
import Links from "./Links"

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      {}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
