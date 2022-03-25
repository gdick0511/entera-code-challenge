
function InfoCards({image, title, name}){

    return(
        <div>
           <img src={image} alt={title} />
           <h2>Title: {title}</h2>
           <h4>Artist: {name}</h4>
        </div>
    )
}

export default InfoCards;