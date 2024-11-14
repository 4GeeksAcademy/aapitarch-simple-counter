import React, {useState, useEffect} from "react";
import SecondsCounter from "./secondsComponent";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return <SecondsCounter seconds={seconds} />;
}

export default Home;
