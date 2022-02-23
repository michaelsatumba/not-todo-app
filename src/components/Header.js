import React from 'react';

function Header() {
	function hello() {
		alert('Hello');
	}
	// make this to change style of page
	return (
		<div className="">
			<img src="./images/bg-mobile-dark.jpg" alt="background-dark" />
			<p className="text-white font-bold absolute top-10 left-5 text-2xl tracking-widest">
				NOT TO DO
			</p>

			<img
				className="absolute top-10 right-5"
				src="./images/icon-sun.svg"
				alt="sun"
				onClick={hello}
			/>
		</div>
	);
}

export default Header;
