import React from "react";
import styled from "styled-components";
import * as EmailValidator from "email-validator";
import { AUTH, FIRESTORE } from "../db/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const SideBar = () => {
	const [user] = useAuthState(AUTH);
	const userChatRef = FIRESTORE.collection("chats").where(
		"users",
		"array-contains",
		user.email
	);
	const [chatSnapShot] = useCollection(userChatRef);

	const createChat = () => {
		const input = prompt(
			"Please enter an andress email of the user you want to chat with"
		);

		if (!input) return null;

		if (
			EmailValidator.validate(input) &&
			!chatAlreadyExists(input) &&
			input !== user.email
		) {
			// add chat is it doesnt already exists
			FIRESTORE.collection("chats").add({
				users: [user.email, input],
			});
		}
	};

	const chatAlreadyExists = (recipientEmail) =>
		!!chatSnapShot?.docs.find(
			(chat) =>
				chat.data().users.find((user) => user === recipientEmail)?.length > 0
		);

	return (
		<SideBarContainer>
			<SideBarHeader>
				<i onClick={() => AUTH.signOut()} className="fas fa-user-circle"></i>
				<IconContainer>
					<i className="fas fa-comment-dots"></i>
					<i className="fas fa-ellipsis-v"></i>
				</IconContainer>
			</SideBarHeader>
			<Search>
				<i className="fas fa-search"></i>
				<SearchInput placeholder="search in chat" />
			</Search>
			<SideBarButton onClick={createChat}>START A NEW CHAT</SideBarButton>

			{/* chats list  */}
			{chatSnapShot.map((chat) => 
			<Chat key={chat.id} id={chat.id} user={chat.user}/>
 			)}
		</SideBarContainer>
	);
};

export default SideBar;

const SideBarContainer = styled.div``;
const SideBarHeader = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	background-color: #fff;
	align-items: center;
	justify-content: space-between;
	padding: 15px;
	height: 80px;
	border-bottom: 1px solid whitesmoke;

	> i {
		font-size: 40px;
		color: gray;
		:hover {
			cursor: pointer;
			color: lightgray;
		}
	}
`;
const IconContainer = styled.div`
	> i {
		font-size: 30px;
		color: gray;
		margin: 0 20px;
		:hover {
			cursor: pointer;
			color: lightgray;
		}
	}
`;
const Search = styled.div`
	display: flex;
	align-items: center;
	border-radius: 2px;
	padding: 20px;
	> i {
		font-size: 20px;
		color: gray;
		margin: 0 5px;
	}
`;
const SearchInput = styled.input`
	outline-width: 0;
	border: none;
	flex: 1;
`;
const SideBarButton = styled.button`
	width: 100%;
	border: none;
	padding: 10px 0;
	color: white;
	font-weight: bolder;
	background-color: purple;
`;
