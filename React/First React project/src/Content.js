const Content = ({ginput}) => {

    const colorName = ginput === '' ? "Empty Value!" : ginput;
    const showColor =  ginput === '' ? 'white' : ginput;
    
      
    return(
        <section className="DisplayColor" style={{backgroundColor: showColor}}>
            <p className="ColorName">{colorName}</p>
        </section>
    )
}

export default Content