import React from "react"
import classes from "./Header.module.css"
import { NavLink } from "react-router-dom"


const Header = (props) => {
	return (<header className={classes.header}>
			<img alt={"123"} src="https://img.razrisyika.ru/kart/94/372802-logo-6.jpg"></img>
			<div className={classes.loginBlock}>
				{props.isAuth ? props.login : <NavLink to={"/login"}>LOGIN</NavLink>}
			</div>
		
		
		</header>
	)
}

export default Header