import "./Input.css"
const Input = ({  inputRef, ...props}) =>{
    return(
        <input  ref={inputRef}  className={ "input"} {...props} />
    )
}
export default Input