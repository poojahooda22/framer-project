import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../assets/logo.png'
import { UpdateFollower } from "react-mouse-follower";

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
    <div className="container mx-auto py-2 flex items-center justify-between cursor-pointer">
        <div className="w-[4vw]">
            <UpdateFollower
                className="sample"
                mouseOptions={{
                    backgroundColor: 'white',
                    followSpeed: 0.2,
                    scale: 5,
                    mixBlendMode: 'difference',
                }}
            >
            <img src={logo} />
            </UpdateFollower>
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
