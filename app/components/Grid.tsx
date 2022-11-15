import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

import type { SbBlokData } from "@storyblok/react";

interface GridProps {
	blok: SbBlokData;
}

const Grid = ({ blok }: GridProps) => {
	return (
		<div
			className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3"
			{...storyblokEditable(blok)}
		>
			{(blok.columns as SbBlokData[]).map((nestedBlok) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	);
};

export default Grid;
