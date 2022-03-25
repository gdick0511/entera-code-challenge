
function InfoCard({image, title, name}){

    // After importing the props that were passed into this component, I can then assign them to elements within the return to render the data that was requested 
    
    return(
        <div>
           <img src={image} alt={title} />
           <h2>Title: {title}</h2>
           <h4>Artist: {name}</h4>
        </div>
    )
}

export default InfoCard;