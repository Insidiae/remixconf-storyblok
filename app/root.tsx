import type { MetaFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import HeroSection from "./components/HeroSection";
// import AllArticles from "./components/AllArticles";
// import Article from "./components/Article";

import styles from "./styles/app.css";

const components = {
	feature: Feature,
	grid: Grid,
	teaser: Teaser,
	page: Page,
	hero_section: HeroSection,
	// all_articles: AllArticles,
	// article: Article,
};

storyblokInit({
	accessToken: "FdMv2eyZlGIQJzmbZ0g0YQtt",
	use: [apiPlugin],
	components,
});

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "New Remix App",
	viewport: "width=device-width,initial-scale=1",
});

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

