import { Fragment, useRef, useState } from "react";
import Search from "./Search";

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [items, setItems] = useState([]);
    const accordion = useRef(null);
    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderItems = items.map((item, index) => {
        const active = index === activeIndex ? 'show' : '';
        return (
            
            <div className="accordion mt-2" id="accordionExample" key={item.pageid}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="true" aria-controls={`collapse${activeIndex}`} onClick={ ()=> onTitleClick(index)}>
                        {item.title}
                    </button>
                    </h2>
                    <div ref={accordion} id={index} className={`accordion-collapse collapse ${active}`} aria-labelledby="headingOne">
                        <div className="accordion-body">
                            <span dangerouslySetInnerHTML={{__html: item.snippet}}>
                                
                            </span>
                            <a href={`https://en.wikipedia.org/wiki/curid=${item.pageid}`} style={{paddingLeft: '10px'}} target="_blank" rel='noreferrer noopener'>Go</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <Fragment>
            { <Search lists={setItems} />}
            {items.length ? <p>Total items found: {items.length}</p> : ''}
            {renderItems}
        </Fragment>
    );
}
export default Accordion;