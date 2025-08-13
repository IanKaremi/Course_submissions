export default function Persons(props){

    return(
         <ul>{props.res.length > 0 ? props.renderRes :props.renderPerson}</ul>
    )
}