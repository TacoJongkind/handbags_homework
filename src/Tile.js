import brand from "./assets/brand.png";

function Tile(props){
    console.log("what are the tile props", props);
    return(
        <section>
            <h2>{props.title}</h2>
            <p>{props.firstParagraph}</p>
            <p>{props.secondParagraph}</p>
            <img src={props.image}/>
        </section>

    )
}
export default Tile