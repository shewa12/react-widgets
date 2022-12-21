import { Fragment, useState } from "react";
import Search from "./Search";

function Accordion() {
   
    const [items, setItems] = useState([]);
    //const accordion = useRef(null);
    const onTitleClick = (index) => {
        const accordion = document.getElementById(index);
        accordion.classList.toggle("show");
        if (accordion.classList.contains("show")) {
            accordion.querySelector(".accordion-body").style.display = 'block';
        } else {
            accordion.querySelector(".accordion-body").style.display = 'none';
        }
    }

    const renderItems = items.map((item, index) => {
        
        return (
            <div className="accordion mt-2" id="accordionExample" key={item.pageid}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" aria-expanded="true" onClick={ ()=> onTitleClick(index)}>
                        {item.title}
                    </button>
                    </h2>
                    <div id={index} className={`accordion-collapse collapse`} aria-labelledby="headingOne">
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
            <p className="my-3 text-primary">
              Search from Wiki with Debouncing mechanism
            </p>
            { <Search lists={setItems} />}
            {items.length ? <p>Total items found: {items.length}</p> : ''}
            {renderItems}
        </Fragment>
    );
}
export default Accordion;