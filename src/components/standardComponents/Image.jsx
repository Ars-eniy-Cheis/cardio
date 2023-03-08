const Image = (props) => {

    return (
        <div >
            <img
                src={props.src}
                alt={props.alt}
                className={props.className}
            />
        </div>
    );
}

export default Image;