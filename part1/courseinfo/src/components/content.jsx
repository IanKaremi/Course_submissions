import Part from "./part"
export default function Content(props){
    return(
        <>
            
                <Part part={props.part1} ex={props.exercises1}/>
          
            
                <Part part={props.part2} ex={props.exercises2}/>
          
            
                <Part part={props.part3} ex={props.exercises3}/>
           
        </>
    )
}