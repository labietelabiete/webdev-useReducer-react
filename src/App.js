import React, { useState } from 'react';

export default function App() {
	const [count, setCount] = useState(0);

	function increment() {
		setCount(prevCount => prevCount + 1)
	}

	function decrement() {
		setCount(prevCount => prevCount - 1)
	}

	return (
		<>
			<button onclick={decrement}>-</button>
			<span>{count}</span>
			<button onclick={increment}>+</button>
		</>
	)
}
