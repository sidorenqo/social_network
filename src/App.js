import React from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import LoginPage from "./components/Login/Login"

const App = (props) => {
	
	return (
		<BrowserRouter>
			<div className="wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/dialogs/*"
						       element={<DialogsContainer store={props.store} />} />
						
						<Route path="/profile/:UserId"
						       element={<ProfileContainer store={props.store} />} />
						<Route path="/profile" element={<ProfileContainer />} />
						
						<Route path="/users/*" element={<UsersContainer />} />
						
						<Route path="/login/*" element={<LoginPage />} />
					
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	
	)
}

export default App
