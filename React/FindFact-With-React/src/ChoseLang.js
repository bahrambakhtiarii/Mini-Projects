const ChoseLang = ({setLang, setDirection, lang}) => {
    return(
        <main>
            <form onSubmit={(e) => e.preventDefault} className="choselang">
            <input 
                type="button" 
                className={`fa ${lang === "fa" ? "selected" : ""}`}
                id="fa"
                value="fa"
                onClick={() => {
                    setLang('fa');
                    setDirection('rtl');
                }}
                 
            />
            <input 
                type="button" 
                className={`en ${lang === "en" ? "selected" : ""}`}
                id="en"
                value="en"
                onClick={() => {
                    setLang('en');
                    setDirection('ltr');
                }}

            />
            </form>

        </main>
    )
}


export default ChoseLang;

