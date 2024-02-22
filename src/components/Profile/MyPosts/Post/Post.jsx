import React from "react";
import classes from './Post.module.css'

const Post = (props) => {

	return (

		<div className={classes.item}>
			<img src='https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg'></img>
			{props.message}
			<div>
				<span>Лайк</span> {props.likesCount}
			</div>

		</div>
	)
}

export default Post