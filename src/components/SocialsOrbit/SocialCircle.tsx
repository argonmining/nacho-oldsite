import OrbitingCircles from '@/components/ui/orbiting-circles';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialCircle(props: {
	image: string;
	size: number;
	radius: number;
	duration: number;
	href: string;
	delay?: number;
	alt?: string;
}) {
	return (
		<OrbitingCircles
			className={`size-[${props.size}px] social-circle border-none bg-transparent`} // Scale 0 because it's animated
			radius={props.radius}
			duration={props.duration}
			delay={props.delay || 0}
		>
			<Link href={props.href} target="_blank">
				<Image
					src={props.image}
					alt={props.alt || ''}
					width={props.size}
					height={props.size}
					className={'transition-transform hover:scale-110'}
				/>
			</Link>
		</OrbitingCircles>
	);
}
