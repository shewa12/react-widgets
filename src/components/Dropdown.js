import { useEffect, useRef } from "react"

const Dropdown = ({options, label, selected, onSelectedChange}) => {
    const ref = useRef();
    const dropdownMenuRef = useRef();

    const optionsHTML = options.map((option) => {
        return <li key={ option.value }  onClick={ () => {onSelectedChange(option)} }><a href="#" className="dropdown-item">{option.label}</a></li>
    })

    return(
        <div ref={ ref } className="dropdown">
        <button className="btn btn-primary btn-lg btn-block dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {selected && selected.label ? selected.label : label}
        </button>
        <ul ref={ dropdownMenuRef } className="dropdown-menu">
            {optionsHTML}
        </ul>
        </div>
    );
}
export default Dropdown;