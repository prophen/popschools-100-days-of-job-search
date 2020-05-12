import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation">
    <a href="https://docs.100daysofjobsearch.com">Daily Prompts</a> 
    <a href="https://twitter.com/100dojs">@100dojs</a> 
    <a href="https://remind.com/join/100dojs">Get text reminders</a> 
    <ThemeChanger/>
  </nav>
  
)
