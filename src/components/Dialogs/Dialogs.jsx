import React from "react"
import Redirect from "react"
import classes from "./Dialogs.module.css"
import DialogItem from "./Dialogitem/Dialogitem"
import Message from "./Message/Message"
import { Field, Form, Formik } from "formik"


const Dialogs = (props) => {
	
	let state = props.dialogsPage
	
	let dialogsElements =
		state.dialogs.map(d => (<DialogItem name={d.name} key={d.id} id={d.id} />))
	
	let messageElement =
		state.messages.map(m => (<Message message={m.message} key={m.id} />)
		)
	
	let newMessageBody =
		state.newMessageBody
	
	
	if (!props.isAuth) return <Redirect to={"/login"} />
	
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				<div>{messageElement}</div>
			</div>
			<AddMassageForm sendMessage={props.sendMessage} />
		</div>
	
	)
}

//
const AddMassageForm = (props) => {
	
	let addNewMessage = (values) => {
		
		props.sendMessage(values)
		
	}
	
	return (
		<Formik
			initialValues={{
				newMessageBody: ""
			}}
			onSubmit={(values, { resetForm }) => {
				addNewMessage(values.newMessageBody)
				resetForm({ values: "" })
			}
			}
		>
			{() => (
				<Form>
					<div>
						<Field
							name={"newMessageBody"}
							as={"textarea"}
							placeholder={"enter text"}
						/>
					</div>
					
					<button type={"submit"}>Send2</button>
				</Form>
			)}
		</Formik>
	)
}

export default Dialogs