import { storyblokEditable } from "@storyblok/react";

import type { SbBlokData } from "@storyblok/react";

interface FeatureProps {
	blok: SbBlokData;
}

const Feature = ({ blok }: FeatureProps) => (
	<div className="column feature" {...storyblokEditable(blok)}>
		<div className="p-6">
			<h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
				{blok.name as string}
			</h1>
		</div>
	</div>
);

export default Feature;
