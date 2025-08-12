import Header from './header'
import Content from './content'
export default function Course({course}) {
    
    return(
        <>
            <Header props={course}/>
            <Content props={course.parts}/> 
        </>
    )
    
}