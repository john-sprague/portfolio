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
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<h1 className=" p-10 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
				John Sprague
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-md text-zinc-500 ">
					Hi, my name is John, I'm an Enterprise Software Engineer with knowledge and experience in front-end / full stack development, 
          <br/>
          UX, and complex problem solving, producing code and features that strengthened applications for IBM.
				</h2>
			</div>
		</div>
  )
}
