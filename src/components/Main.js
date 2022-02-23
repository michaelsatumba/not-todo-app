import React, { useState } from 'react';

function Main() {
	const [notTodo, setNotTodo] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		list.push(notTodo);
		alert(list);
	};

	const list = ['Watch TV'];
	return (
		<div className="grid justify-items-center">
			{/* first */}
			<div className="absolute top-24 left-14 border-none bg-slate-700 px-10">
				<form onSubmit={handleSubmit}>
					<div className="flex space-x-3">
						<div>
							<input type="checkbox" className="" onClick={handleSubmit} />
						</div>

						<div>
							<input
								type="text"
								placeholder="Create a new not-to-do..."
								className="bg-slate-700 text-white"
								value={notTodo}
								onChange={(element) => setNotTodo(element.target.value)}
							/>
						</div>
					</div>
				</form>
			</div>

			{/* second */}
			<div className="flex flex-col border-none bg-slate-700 px-12 py-2 text-white">
				<div className="flex space-x-3 border-b-2">
					<div>
						<input type="checkbox" className="" />
					</div>

					<div>
						<p>{list[0]}</p>
					</div>

					<div>
						<img src="./images/icon-cross.svg" alt="x" />
					</div>
				</div>
				<div className="flex space-x-3 border-b-2">
					<div>
						<input type="checkbox" className="" />
					</div>

					<div>
						<p>{list[1]}</p>
					</div>

					<div>
						<img src="./images/icon-cross.svg" alt="x" />
					</div>
				</div>
				<div className="flex space-x-3 border-b-2">
					<div>
						<input type="checkbox" className="" />
					</div>

					<div>
						<p>Complete online Javascript</p>
					</div>

					<div>
						<img src="./images/icon-cross.svg" alt="x" />
					</div>
				</div>
				<div className="flex space-x-3 border-b-2">
					<div>
						<input type="checkbox" className="" />
					</div>

					<div>
						<p>Complete online Javascript</p>
					</div>

					<div>
						<img src="./images/icon-cross.svg" alt="x" />
					</div>
				</div>
				<div className="flex space-x-3 border-b-2">
					<div>
						<input type="checkbox" className="" />
					</div>

					<div>
						<p>Complete online Javascript</p>
					</div>

					<div>
						<img src="./images/icon-cross.svg" alt="x" />
					</div>
				</div>

				<div className="flex justify-between text-gray-400">
					<p>5 items left</p>
					<p>Clear Completed</p>
				</div>
			</div>

			{/* third */}
			<div className="mt-5 w-3/4 border bg-slate-700 flex justify-around text-gray-400">
				<button>
					<p>All</p>
				</button>
				<button>
					<p>Active</p>
				</button>
				<button>
					<p>Completed</p>
				</button>
			</div>
		</div>
	);
}

export default Main;
