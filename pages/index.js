import React from "react";
import Head from "next/head";
import styled from "styled-components";
import SideBar from "../components/SideBar";

export default function Home() {
	return (
		<HomeContainer>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <SideBar /> */}
			<SideBar />
		</HomeContainer>
	);
}

const HomeContainer = styled.div``;
