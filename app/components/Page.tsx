import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

import type { SbBlokData } from "@storyblok/react";

interface PageProps {
	blok: SbBlokData;
}

const Page = ({ blok }: PageProps) => (
	<main className="text-center mt-4" {...storyblokEditable(blok)}>
		{blok.body
			? (blok.body as SbBlokData[]).map((nestedBlok) => (
					<StoryblokComponent
						className=""
						blok={nestedBlok}
						key={nestedBlok._uid}
					/>
			  ))
			: null}
	</main>
);

export default Page;
