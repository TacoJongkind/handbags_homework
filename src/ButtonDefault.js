function Button(props) {
    console.log("what props", props);
    return (
        <>
            <button type="button" onClick={() => console.log(props.subject)}>{props.subject} </button>
        </>
    )


}

export default Button