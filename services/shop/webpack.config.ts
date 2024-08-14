import webpack, {Configuration} from "webpack";
import path from "path";
import {BuildMode, BuildPath, BuildPlatform, buildWebpack} from "@packages/build-config";
import packageJson from './package.json'

interface EnvVariables {
	mode?: BuildMode;
	port?: number;
	platform?: BuildPlatform;
	analyzer?: boolean;
}

export default (env: EnvVariables) => {
	const paths: BuildPath = {
		output: path.resolve(__dirname, "build"),
		entry: path.resolve(__dirname, "src", "index.tsx"),
		html: path.resolve(__dirname, "public", "index.html"),
		public: path.resolve(__dirname, "public"),
		src: path.resolve(__dirname, "src"),
	};

	const config: Configuration = buildWebpack({
		port: env.port ?? 3001,
		mode: env.mode ?? "development",
		isDev: env.mode === "development",
		isProd: env.mode === "production",
		paths,
		analyzer: env.analyzer,
		platform: env.platform ?? "desktop",
	});

	config.plugins.push(new webpack.container.ModuleFederationPlugin({
		name: 'shop',
		filename: 'remoteEntry.js',
		exposes: {
			'./Router': './src/router/Router.tsx',
		},
		shared: {
			...packageJson.dependencies,
			'react': {
				singleton: true,
				requiredVersion: packageJson.dependencies['react'],
			},
			'react-router-dom': {
				singleton: true,
				requiredVersion: packageJson.dependencies['react-router-dom'],
			},
			'react-dom': {
				singleton: true,
				requiredVersion: packageJson.dependencies['react-dom'],
			},
		}
	}))

	return config;
};
