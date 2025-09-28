import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return(
    <div className='text-gray-900 transition-colors duration-300 bg-white dark:bg-gray-900 dark:text-gray-100'>
      <Navbar/>
      <section id='home'><Hero/></section>
      <section id='about'><About/></section>
      <section id='projects'><Projects/></section>
      <section id='contact'><Contact/></section>
      <Footer/>
    </div>
  );
}