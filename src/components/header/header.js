import Link from "next/link"
import styles from '../../../styles/home.module.css'
export const Header = () => {
     return (
    
     <header>
        <div className="topNav">
        <img src=" https://images.unsplash.com/photo-1667295757008-9c58133f5cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBpbmslMjBjcm9zc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60 " alt="ok"/>
        <nav>
            <ul>
                <li><Link href="/"className='nav_links' >Home</Link></li>
                <li><Link href="/events" className='nav_links'>Events</Link></li>
                <li><Link href="/about-us" className='nav_links'>About us</Link></li>
            </ul>
 
        </nav>
        </div>
        <h3> Events around the world </h3>
     </header>
    
     
      
     )
}