import { useEffect, useState } from "react";
import wikiInstance from "../api/WikiAPI";

const Search = (props) => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
   
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [term]);

    useEffect(() =>{
        const search = async () => {
            const response = await wikiInstance.get(
                '',
                {
                    params: {
                        action: "query",
                        list: "search",
                        srsearch: term,
                        format: "json"
                    }
                }
            );
            if (response.data && ! response.data.error) {
                props.lists(response.data.query.search);
            }
        }
        search();
    },[debouncedTerm]);

    return (
        
        <div className="search">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-search"></i>
                </span>
                <input type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setTerm(e.target.value)}/>
            </div>
        </div>
    );
}
export default Search;