import React from "react";
import Link from "next/link";
const CatEvent = ({data, pageName}) => {
    return (
           <>
           <div className="flex">
                <h1>{`Events in ${pageName}`}</h1>
            </div>
            <div className="cont">
                {
                    data.map((item) => {
                        return (
                            <Link href={`/events/${pageName}/${item.id}`} key={item.id}  className="event_cont2">

                                    <img src={item.image} className="event_img2" />
                                    <div className="event-cont-cat">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                        
                            </Link>
                        )
                    })
                }
            </div>
           </>
    );
}

export default CatEvent