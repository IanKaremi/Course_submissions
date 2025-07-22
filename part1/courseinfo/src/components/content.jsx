import Part from "./part"
export default function Content({parts}){
    console.log(parts)
    return(
        <>
            
               {parts.map((x,idx) =>
                (   
                    <>
                    
                    <Part key={idx} name={x.name} ex={x.exercises}/>
                    </>

                ))}
              
               
          
            
                
           
        </>
    )
}