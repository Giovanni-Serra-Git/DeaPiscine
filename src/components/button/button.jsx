/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import "./button.css"

export default function Button({children, path, classList}) {


  return <NavLink className={classList ? classList : ""} to={path}> {children} </NavLink>

  // if (path) {
  //   return <NavLink className={classList ? classList : ""} to={path}> {children} </NavLink>
  // } else {
  //   return (
  //     <NavLink className={classList == "btn-discover-tablet" ? classList + " nav-tablet " : "btn-discover-desktop"}  to={path}>
  //         {children}
  //     </NavLink>
  //   )
  // }
  


}
