import { RoadmapElement } from '@/config/roadmap';
import clsx from 'clsx';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Theme {
	colors: {
		primary: string;
	};
}

const RoadmapCard = styled.div<{ theme: Theme }>`
	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 2rem;
	padding: 1rem 2rem;
	width: 21rem;
	gap: 1rem;
	display: flex;
	flex-direction: column;
`;

export default function RoadmapElementCard(props: { roadmapElement: RoadmapElement }) {
	const cardContent = (
		<div className={'space-y-2'}>
			<h1 className={'text-4xl font-bold'}>{props.roadmapElement.title}</h1>
			<p
				className={clsx(
					'flex items-center gap-1 text-xl font-bold',
					props.roadmapElement.statusClassName || 'text-primary'
				)}
			>
				{props.roadmapElement.statusIcon} <span>{props.roadmapElement.status}</span>
			</p>
			<p className={'text-xl'}>{props.roadmapElement.description}</p>
		</div>
	);

	return props.roadmapElement.statusUrl ? (
		<Link href={props.roadmapElement.statusUrl} target="_blank" rel="noopener noreferrer" className="block">
			<RoadmapCard className={'roadmap-card flex-1 bg-background hover:bg-background/90 transition-colors cursor-pointer'}>
				{cardContent}
			</RoadmapCard>
		</Link>
	) : (
		<RoadmapCard className={'roadmap-card flex-1 bg-background'}>
			{cardContent}
		</RoadmapCard>
	);
}
