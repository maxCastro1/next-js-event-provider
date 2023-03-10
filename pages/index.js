
import styles from '../styles/home.module.css'
import { HomePages } from '../src/components/Home/home';


function HomePage({ data }) {
    return (
    <>
        <div className={styles.body}>
            <HomePages data={data} />     
        </div>
    </>
    )
}
export default HomePage

export async function getServerSideProps() {
    const { events_categories } = await import('../data/data.json');
    return {
        props: {
            data: events_categories
        }
    }
}

