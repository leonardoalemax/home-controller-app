"use client";

import Actions from "../../config/actions.json";

export default function Areas() {
	return (
		<div className='flex flex-col p-4'>
			{Actions.areas.map((area) => (
				<div className='flex flex-col gap-4 justify-between whitespace-break-spaces'>
					<h2>{area.name}</h2>
					<div className='flex flex-col gap-4 justify-between'>
						{area.actions.map((action) => (
							<button
								className='btn btn-primary rounded'
								onClick={() => {
									fetch(action.route);
								}}>
								{action.title}
							</button>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
