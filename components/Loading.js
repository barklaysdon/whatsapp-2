import React from "react";
import { Circle } from "better-react-spinkit";

const Loading = () => {
	return (
		<div
			style={{
				display: "grid",
				height: "100vh",
				placeItems: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					width: 200,
					height: 300,
				}}
			>
				<img
					src="/f2q.png"
					alt=""
					height={200}
					width={200}
					style={{ marginBottom: 10 }}
				/>
				<Circle color="purple" size={60} />
			</div>
		</div>
	);
};

export default Loading;
