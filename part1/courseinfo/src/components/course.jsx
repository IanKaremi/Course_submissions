import Header from './header'
import Content from './content'
export default function Course({course}) {
    console.log(course.parts);
    const x = course.parts.reduce((sum,a)=>{return sum + a.exercises},0)
    
    return(
        <>
            <Header props={course}/>
            <Content props={course.parts}/> 
            <strong>total of {x} exercises</strong>
        </>
    )
    
}