import Link from "next/link"
import styles from '../../../styles/home.module.css'

export const HomePages = ({data}) => {
    return(
        <main className="home_body">
        {data.map((events,index) => {
            return (
                // <div className={styles.event_cont} key={index}>
                <Link href={`/events/${events.id}`} className="event_cont2 event_Special" key={index}>
                <img src={events.image} className="event_img2"/>
                    <div className="event-cont-cat">
                    <h2 className="event_title">{events.title}</h2>
                    <p className="event_description">{events.description}</p>
                    </div>
                </Link>
                // </div>
            )
        })}
    
    </main>
    )
   
}