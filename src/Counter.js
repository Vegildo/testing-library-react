// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount((n) => n + 1);
	return (
		<div>
			<button onClick={increment}>{count}</button>
		</div>
	);
};

export default Counter;

// ReactDOM.render(
//     <Counter />,
//     document.getElementById('root')
// );
