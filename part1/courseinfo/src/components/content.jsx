import Part from "./part"
export default function Content({props}){
   
    return(
        <>
            
               {props.map((x) =>
                (   
                 
                    
                    <Part key={x.id} name={x.name} ex={x.exercises}/>
                   

                ))}
              
               
          
            
                
           
        </>
    )
}