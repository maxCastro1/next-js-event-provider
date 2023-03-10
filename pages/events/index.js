import styles from '../../styles/home.module.css'
import Link from 'next/link'
export default function EventsPage ({data}){
    return (
    <>
    <div className="main_body">
        {data.map((event)=>{
            return(
                <Link href={`/events/${event.id}`} key={event.id}  className="event_cont">
                    <img src={event.image} className="event_img"/>
                    <h2 className="event-title">{event.title} </h2>
                </Link>
            )
        })}
        </div>
    </>
    )
}


export async function getStaticProps() {
    const { events_categories } = await import('/data/data.json');
    return {
        props: {
            data: events_categories
        }
    }
}

