import { useUserStore } from '@/store/user';

export default function Header() {
	const currentUser = useUserStore((state) => state.user);

	return (
		<header className='p-3 bg-dark-100 border-b border-b-dark-400 w-full h-[10dvh] flex justify-between'>
			<div className='flex items-center'>
				<h1 className='text-2xl font-semibold'>Live Chat</h1>
			</div>

			<div className='flex items-center'>
				<p>Entered as: {currentUser}</p>
			</div>
		</header>
	);
}
