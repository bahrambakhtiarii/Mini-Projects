const GetContent = ({ number, setNumber, typeFact, setTypeFact, handleSubmit, lang }) => {
    return(
        <form onSubmit={handleSubmit} className="main-content">
        <input 
            type="number"
            name="number"
            placeholder={lang === 'fa' ? 'یک عدد وارد کنید...' : 'Enter Number...'}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
        />
        <select 
            name="options" 
            id="options"
            value={typeFact}
            onChange={(e) => setTypeFact(e.target.value)}
        >
            <option value="year">{lang === 'fa' ? 'سال' : 'Year'}</option>
            <option value="date">{lang === 'fa' ? 'روز' : 'Date'}</option>
            <option value="math">{lang === 'fa' ? 'ریاضیات' : 'Math'}</option>
            <option value="trivia">{lang === 'fa' ? 'عمومی' : 'Trivia'}</option>
        </select>

        <button type="submit">{lang === 'fa' ? 'ارسال' : 'Send'}</button>
            
        </form>
    )
}

export default GetContent;