import { Bank } from 'phosphor-react';

interface TextLogoProps {
	size?: 'sm' | 'md';
}

export const TextLogo = ({ size = 'md' }: TextLogoProps) => {
	return (
		<div className="flex items-center gap-2 text-violet-500">
			<Bank size={size === 'md' ? 50 : 30} />
			<span className={`font-semibold ${size === 'md' ? 'text-4xl' : 'text-2xl'}`}>
        C<span className="text-white">WS</span>
			</span>
		</div>
	);
};
