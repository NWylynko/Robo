import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'


export function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/utils/client" title="Client"/>
        <Link to="/utils/Wizard" title="Wizard"/>
        <Link to="/create/Controller" title="Controller"/>
        <Link to="/create/Profile" title="Profile"/>
        <Link to="/create/Robot" title="Robot"/>
        <Link to="/create/Servo" title="Servo"/>
      </ul>
    </nav>
  );
}

function Link({to, title}: { to: string, title: string}) {
  return (
    <li>
      <NavLink exact to={to} activeClassName="active" >{title}</NavLink>
    </li>
  )
}