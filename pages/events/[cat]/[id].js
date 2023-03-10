
import EventPages from '../../../src/components/events/event-page'
const EventPage = ({data}) => {

   return(
      <EventPages event={data}  />

   )}

export async function getStaticPaths() {
   const { allEvents } = await import('/data/data.json');
   const allSingleEvent = allEvents.map((event)=>{
      return{
         params:{
            cat:event.city,
             id: event.id,
            },
      }             
   })
   return {
       paths: allSingleEvent,
       fallback: false,
   }
}
export async function getStaticProps(context) {
   const { allEvents } = await import('/data/data.json');
   const id = context.params.id
   const events = allEvents.find((item) => item.id === id)
   return {
       props: { data: events }
   }
}
export default EventPage;