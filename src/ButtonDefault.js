function ButtonDefault(props) {
    console.log("what props", props);
    return (
        <>
            <button type="button" disabled={props.isDisabled}  onClick={() => console.log(props.subject)}>{props.subject} </button>
        </>
    )


}

export default ButtonDefault