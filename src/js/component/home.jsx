import React, { useState } from "react";

//create your first component
const Home = () => {

	const [active, setActive] = useState("")



	return (
		<>
			<div className="vh-100 text-center">
				<div className="tube">
					<div></div> {/* This div is to make the tube */}
				</div>
				<div className="box">

					<div> {/* This div is to put the background to the box */}
						<div className={`light red ${active === "red" && "active"}`}
							onClick={() => setActive("red")}
						></div>
						<div className={`light yellow ${active === "yellow" && "active"}`}
							onClick={() => setActive("yellow")}
						></div>
						<div className={`light green ${active === "green" && "active"}`}
							onClick={() => setActive("green")}
						></div>

					</div>


				</div>
			</div>
		</>
	);
};

export default Home;
