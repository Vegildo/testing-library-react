import React, { useState } from "react";
import ReactDOM from "react-dom";

const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount((n) => n + 1);
	return (
		<div>
			<button onClick={increment}>{count}</button>
		</div>
	);
};

ReactDOM.render();
