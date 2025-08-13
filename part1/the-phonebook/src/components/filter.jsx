export default function Filter(props) {
    return(

    <form>
        filter by name <input value={props.value} onChange={props.onChange} />
    </form>

    )
    
}