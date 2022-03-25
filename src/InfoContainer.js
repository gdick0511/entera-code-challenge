import InfoCard from "./InfoCard"

function InfoContainer({info}){
    
    // within this functional component of InfoContainer, I am passing state as a prop.
    // I am then using the data within that state to pass props along to the InfoCards component. 
    
    return(
        <div>
            <InfoCard key={info.objectID} image={info.primaryImageSmall} title={info.title} name={info.artistDisplayName}/>
        </div>
    )
}

export default InfoContainer;