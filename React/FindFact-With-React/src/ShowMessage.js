const ShowMessage = ({data, error, isLoading}) => {
   
   
    return(
        <section className="show-fact">
            {error && <p style={{color: "red"}}>{error}</p>}
            {isLoading && <p style={{color: "orange"}}></p>}
            {data && <p class="fact-content">{data}</p>}
        </section>
    )
}

export default ShowMessage;