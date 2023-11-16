import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
	{
		input: 'index.ts',
		output: [
			{
				dir: 'dist',
				format: 'es',
			},
		],
		plugins: [
			typescript(),
			resolve({ browser: true }),
			commonjs({ browser: true }),
		],
	},
]
