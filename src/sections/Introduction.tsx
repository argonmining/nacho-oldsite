'use client';
import { PartButton } from '@/components/ui/Buttons/PartButton';
import { SectionSubtitle, SectionTitle } from '@/components/ui/Typography/SectionTitle';
import TokenomicsPart from '@/parts/Tokenomics';
import VisionPart from '@/parts/Vision';
import { LucideCoins, LucideEarth, LucidePlay } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ReactPlayer from 'react-player/lazy';

// You're weird ESLint, that's used
/* eslint-disable no-unused-vars */
enum Part {
	Tokenomics,
	Vision
}
/* eslint-enable no-unused-vars */

// Featured video that will be embedded in the Introduction section
const featuredVideo = {
	url: 'https://www.youtube.com/watch?v=nPHlPJM3b5k',
	title: 'Nacho the Kat - The Most Wanted Token on Kaspa',
	thumbnail: '/img/thumbnails/youtube/nachotrailer.webp',
	author: {
		name: 'Nacho the Kat',
		avatar: '/img/brand/nacho.svg'
	}
};

export default function IntroductionSection() {
	const [active, setActive] = useState<Part | null>(null);
	const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

	return (
		<div className="flex flex-col pt-12 gap-8">
			{/* Header - always at the top for both mobile and desktop */}
			<div>
				<SectionTitle>Get to know Nacho</SectionTitle>
				<SectionSubtitle>Learn more about the Nacho project.</SectionSubtitle>
			</div>
			
			{/* Content area with video on left, buttons stacked on right (for desktop) */}
			<div className="flex flex-col lg:flex-row gap-8">
				{/* Left column: Featured video for the introduction */}
				<div className="flex flex-col gap-4 lg:w-1/2">
					<div className="relative aspect-video rounded-2xl border-2 border-primary overflow-hidden">
						<Image
							src={featuredVideo.thumbnail}
							alt="Featured Video Thumbnail"
							fill
							className="object-cover brightness-75"
							priority
						/>
						<button
							onClick={() => setIsVideoDialogOpen(true)}
							className="absolute inset-0 m-auto flex items-center justify-center transition-transform hover:scale-110 active:scale-90"
						>
							<div className="flex items-center justify-center rounded-full bg-primary/20 p-4 backdrop-blur-sm">
								<LucidePlay size={36} className="text-white" />
							</div>
						</button>
					</div>
					<div className="flex items-center gap-4">
						<Image
							src={featuredVideo.author.avatar}
							alt={featuredVideo.author.name}
							width={50}
							height={50}
							className="rounded-full"
						/>
						<div>
							<h3 className="text-lg font-bold">{featuredVideo.author.name}</h3>
							<p className="text-sm text-muted-foreground">Featured Video</p>
						</div>
					</div>
				</div>

				{/* Right column: Buttons side by side for desktop, stacked for mobile */}
				<div className="flex flex-col lg:w-1/2">
					<div className="flex flex-col lg:flex-row lg:gap-4 gap-4">
						<PartButton
							icon={<LucideCoins />}
							active={active === Part.Tokenomics}
							onClick={() => {
								setActive(active === Part.Tokenomics ? null : Part.Tokenomics);
							}}
							className="lg:w-auto"
						>
							Tokenomics
						</PartButton>
						<PartButton
							icon={<LucideEarth />}
							active={active === Part.Vision}
							onClick={() => {
								setActive(active === Part.Vision ? null : Part.Vision);
							}}
							className="lg:w-auto"
						>
							Vision
						</PartButton>
					</div>

					{/* Content area that appears when buttons are clicked */}
					<div className="mt-8">
						{active === Part.Tokenomics && <TokenomicsPart />} 
						{active === Part.Vision && <VisionPart />}
					</div>
				</div>
			</div>

			{/* Video Dialog */}
			<Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
				<DialogContent className="sm:max-w-[800px]">
					<DialogHeader>
						<DialogTitle>{featuredVideo.title}</DialogTitle>
						<DialogDescription>{featuredVideo.author.name}</DialogDescription>
					</DialogHeader>
					<div className="aspect-video w-full">
						<ReactPlayer url={featuredVideo.url} controls width="100%" height="100%" />
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
