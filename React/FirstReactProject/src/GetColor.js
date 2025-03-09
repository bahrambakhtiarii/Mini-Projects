
const GetColor = ({ginput, checkValidation}) => {
    return(
        <form onSubmit={(e) => e.preventDefault} id="getColor">
            <input 
                type="text"
                id="getColor"
                placeholder="Add Color Name..."
                value={ginput} 
                onChange={(e) => checkValidation(e.target.value)}

            />
        </form>
    )
}

export default GetColor