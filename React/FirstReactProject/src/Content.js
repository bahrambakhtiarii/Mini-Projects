const Content = ({ginput,hexValue}) => {

    const colorName = ginput === '' ? "Empty Value!" : ginput;
    const showColor =  ginput === '' ? 'white' : ginput;
    
      
    return(
        <section className="DisplayColor" style={{backgroundColor: showColor}}>
            <p className="ColorName">{colorName}</p>
            <p className="ColorHex">{hexValue}</p>
        </section>
    )
}

export default Content