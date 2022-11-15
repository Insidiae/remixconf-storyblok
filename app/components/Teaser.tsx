import { storyblokEditable } from "@storyblok/react";

import type { SbBlokData } from "@storyblok/react";

interface TeaserProps {
	blok: SbBlokData;
}

const Teaser = ({ blok }: TeaserProps) => {
	return (
		<h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
			{blok.headline as React.ReactNode}
		</h2>
	);
};

export default Teaser;
