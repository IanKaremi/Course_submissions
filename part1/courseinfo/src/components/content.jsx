import Part from "./part"
export default function Content({parts}){
    console.log(parts)
    return(
        <>
            
               {parts.map(x =>
                (   
                    <>
                    
                    <Part name={x.name} ex={x.exercises}/>
                    </>

                ))}
              
               
          
            
                
           
        </>
    )
}