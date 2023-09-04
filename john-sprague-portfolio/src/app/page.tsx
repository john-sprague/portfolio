import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  
  const navigation = [
    {
      href: '/projects',
      name: 'Projects',
    }, 
    {
      href: '/contact',
      name: 'Contact'
    }
  ]
  return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-bounce">
				<ul className="flex items-center justify-center gap-5">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-md duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>

		</div>
  )
}
