import About from "./Page/Abuot/About"
import Contact from "./Page/Contact/Contact"
import Work from "./Page/Work/Work"
const router = [
    { path: '/', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/work', element: <Work /> }
]

export default router