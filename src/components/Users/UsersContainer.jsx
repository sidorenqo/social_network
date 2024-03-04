import { connect } from "react-redux"
import { follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow } from "../../redux/users-reducer"
import React from "react"
import Users from "./Users"
import Preloader from "../common/preloader/Preloader"
import { compose } from "redux"
import {
	currentPage,
	followingInProgress,
	getUsers,
	isFetching,
	pageSize,
	totalUsersCount
} from "../../redux/users-selectors"

class UsersContainer extends React.Component {
	
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	
	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	}
	
	
	render() {
		
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress}
			
			
			/>
		</>
	}
}

// let mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress
// 	}
// }
// Делаем с помощью реселекторов
let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: pageSize(state),
		totalUsersCount: totalUsersCount(state),
		currentPage: currentPage(state),
		isFetching: isFetching(state),
		followingInProgress: followingInProgress(state)
	}
}


/*
* let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setSetUsersTotalCountAC(totalCount))
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingAC(isFetching))
		}
		
	}
}
* */


export default compose(
	connect(mapStateToProps,
		{
			follow, unfollow,
			setCurrentPage,
			toggleFollowingProgress,
			getUsers: requestUsers
		})
)(UsersContainer)