import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import NavModal from './components/NavModal';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getCurrentTheme } from './slices/themeSlice';
import ThemeToggle from './components/ThemeToggle';


function App() {

    const currentTheme = useSelector( getCurrentTheme );

    const [ initialRender, setInitialRender ] = useState(false);

    const pageSections = useRef<HTMLElement[]>([]);

    useEffect(()=>{
        if(currentTheme == "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    })

    useEffect(()=>{
        setInitialRender(true);
    },[initialRender]);

    return (
        <>
            <Toaster />
            <main className='relati ve container mx-auto scroll-smooth '>
                <header className='z-10 sticky top-0 flex justify-center ' >
                    <Header pageSections={pageSections} />
                </header>
                <section id='Home' ref={(element)=>(pageSections.current[0] = element! )}>
                    <Home />
                </section>
                <section id='About' ref={(element)=>(pageSections.current[1] = element!)}>
                    <About />
                </section>
                <section id='Skills' ref={(element)=>(pageSections.current[2] = element!)}>
                    <Skills />
                </section>
                <section id='Projects' ref={(element)=>(pageSections.current[3] = element!)}>
                    <Projects />
                </section>
                <section id='Contact' ref={(element)=>(pageSections.current[4] = element!)}>
                    <Contact />
                </section>
                <footer>
                    <Footer />
                </footer>
                <NavModal pageSections={pageSections} />
                <ThemeToggle />
            </main>
            
        </>
    )
}

export default App
