import InfoCards from "./InfoCards"

function InfoContainer({info}){
    
    const mappableData = Object.values(info)

    // console.log(info)
    // console.log(info.constituents[0])
    // console.log(mappableData[0])
    // console.log(info.objectID)

    // console.log(mappableData)

    // let myArry = [mappableData[0], mappableData[6], mappableData[11],mappableData[19]]

    return(
        <div>
            <InfoCards key={info.objectID} image={info.primaryImageSmall} title={info.title} name={info.artistDisplayName}/>
        </div>
    )
}

export default InfoContainer;