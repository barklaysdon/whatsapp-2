import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { AUTH ,PROVIDER} from "../db/firebase";

const Login = () => {
	const signIn = () => {
		AUTH.signInWithPopup(PROVIDER).catch((err) => {
			console.log(err);
		});
	};

	return (
		<LoginWrapper>
			<Head>
				<title>Login</title>
			</Head>
			<LoginContainer>
				<Logo src="/f2q.png" />
				<LoginButton onClick={signIn}>SIGN IN WITH GOOGLE</LoginButton>
			</LoginContainer>
		</LoginWrapper>
	);
};

export default Login;

const LoginWrapper = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	background-color: whitesmoke;
`;
const LoginContainer = styled.div`
	padding: 100px;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0 0 14px -6px rgba(0, 0, 0, 0.6);
`;
const Logo = styled.img`
	width: 200px;
	height: 200px;
	margin-bottom: 50px;
`;
const LoginButton = styled.div`
	background-color: #604ee6;
	padding: 10px;
	font-size: 12px;
	text-align: center;
	border-radius: 3px;
	color: white;

	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;
