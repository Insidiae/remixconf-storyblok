import * as React from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";

import type { SbBlokData, Stories, StoryData } from "@storyblok/react";

import ArticleTeaser from "./ArticleTeaser";

interface AllArticlesProps {
	blok: SbBlokData;
}

const AllArticles = ({ blok }: AllArticlesProps) => {
	const [articles, setArticles] = React.useState<StoryData[]>([]);

	React.useEffect(() => {
		async function fetchData() {
			const storyblokApi = getStoryblokApi();
			let { data }: Stories = await storyblokApi.get(
				`cdn/stories?starts_with=blog/`
			);
			let filteredArticles = data.stories.filter((a) => a.name != "Blog");

			setArticles(() =>
				filteredArticles.map((a) => {
					a.content.slug = a.slug;
					return a;
				})
			);
		}

		fetchData();
	}, []);

	console.log(articles);

	return (
		<div {...storyblokEditable(blok)}>
			<p className="text-3xl">{blok.title as string}</p>
			<div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:px-24 md:px-16">
				{articles[0] &&
					articles.map((article) => (
						<ArticleTeaser article={article.content} key={article.uuid} />
					))}
			</div>
		</div>
	);
};

export default AllArticles;
