const Link = ({href, className, children}) => {
    const onclick = (e) => {
        e.preventDefault();
        window.history.pushState({}, '', href);
    };

    return <a href={ href } className= { className } onClick= { onclick } > {children} </a>;
}
export default Link;