module.exports = {
	apps: [
		{
			name: "FlowBoard",
			script: "npm",
			args: "run dev",
			env: { NODE_ENV: "development" },
		},
	],
};
