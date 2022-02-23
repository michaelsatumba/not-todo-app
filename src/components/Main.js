import React from 'react';

function Main() {
	return (
		<div className="grid justify-items-center">
			{/* first */}
			<div className="absolute top-24 left-14 border bg-slate-700 px-10">
				<input type="checkbox" className="" />
				<input
					type="text"
					placeholder="Create a new not-to-do..."
					className="bg-slate-700 text-white"
				/>
			</div>

			{/* second */}
			<div className="flex flex-col border bg-slate-700 px-10">
				<div>
					<input type="checkbox" className="" />
					<input
						type="text"
						placeholder="Create a new not-to-do..."
						className="bg-slate-700 text-white"
					/>
					<input type="checkbox" className="" />
				</div>
				<div>
					<input type="checkbox" className="" />
					<input
						type="text"
						placeholder="Create a new not-to-do..."
						className="bg-slate-700 text-white"
					/>
					<input type="checkbox" className="" />
				</div>
				<div>
					<input type="checkbox" className="" />
					<input
						type="text"
						placeholder="Create a new not-to-do..."
						className="bg-slate-700 text-white"
					/>
					<input type="checkbox" className="" />
				</div>
				<div>
					<input type="checkbox" className="" />
					<input
						type="text"
						placeholder="Create a new not-to-do..."
						className="bg-slate-700 text-white"
					/>
					<input type="checkbox" className="" />
				</div>
				<div>
					<input type="checkbox" className="" />
					<input
						type="text"
						placeholder="Create a new not-to-do..."
						className="bg-slate-700 text-white"
					/>
					<input type="checkbox" className="" />
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
