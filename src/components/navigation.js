import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation">
    <a href="https://popschools.club">PopSchools Community</a> 
    <a href="https://twitter.com/100dojs">@100dojs on Twitter</a> 
    <a href="https://remind.com/join/100dojs">Get text reminders</a> 
    <ThemeChanger/>
  </nav>
  
)
