

function Product(props){
    console.log("what are the props?", props);
    return(
        <article>
                  <span>
                      {props.spotlight}
                  </span>
            <img src={props.image}/>
            <p>{props.description}</p>
            <h4>{props.price}</h4>
        </article>
    )
}
export default Product