import { Route, Routes, useLocation } from "react-router";
import Home from './Home'
import Contact from './Contact'
import { AnimatePresence } from "framer-motion";

 
function AnimatedRoute() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoute