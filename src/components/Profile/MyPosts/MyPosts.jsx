import React from "react"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
import { Field, Form, Formik } from "formik"


const MyPosts = (props) => {
	
	let postsElements =
		props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount} />))
	
	let newPostElement = React.createRef()
	
	
	return (
		<div>
			<div className={classes.postsBlock}>
				<h3>MY POST</h3>
				<AddNewPostForm onAddPost={props.onAddPost} />
				<div className={classes.posts}>
					{postsElements}
				</div>
			</div>
		</div>
	)
}

const AddNewPostForm = (props) => {
	
	let onAddPost = (values) => {
		props.addPost(values.newPostText)
	}
	
	return (
		<Formik
			initialValues={{
				newPostText: ""
			}}
			onSubmit={(values, { resetForm }) => {
				onAddPost(values.newPostText)
				resetForm({ values: "" })
			}
			}
		>
			{() => (
				<Form onSubmit={props.handleSubmit}>
					<div>
						<Field name={"newPostText"} component="textarea" />
					</div>
					<div>
						<button>ADD POST</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}


export default MyPosts