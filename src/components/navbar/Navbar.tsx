import { RxHamburgerMenu } from "react-icons/rx";

const data ={
    links: [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Categories',
            url: '/categories'
        },
        {
            name: 'Blog',
            url: '/blog'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Contact',
            url: '/contact'
        },
    ]
}

const Navbar = () => {
  return (
    <div className="container mx-auto py-2 flex items-center justify-between">
        <div className="w-[4vw]">
            <img src="/src/assets/logo.png" />
        </div>
        <div className=" space-x-[3.5vw] text-[1vw] font-medium text-gray-700 uppercase">
            {data.links.map((link,index) => {
                return (
                    <a href={link.url} key={index}>
                        {link.name}
                    </a>
                )
            })}
        </div>
        <div>
            <RxHamburgerMenu 
                size={24} 
                color="#000"
            />
        </div>
    </div>
  )
}

export default Navbar
