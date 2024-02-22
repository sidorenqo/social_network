import React from "react"
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			{/*<div>*/}
			{/*	<img*/}
			{/*		src="https://sun9-32.userapi.com/impf/jNRTYOPchjGB0okvzmy6p9wsJf5FP38y8JI-Nw/mUZCo_BEkds.jpg?size=1818x606&quality=95&crop=0,0,1280,426&sign=d208d372fddbf1cda4348acd4605e7bc&type=cover_group"></img>*/}
			{/*</div>*/}
			<div className={classes.descriptionBlock}>avatar</div>
			<img src={props.profile.photos.large} alt="" />
			
			<ProfileStatus updateStatus={props.updateStatus} status={props.status} />
		
		</div>
	
	)
}

export default ProfileInfo