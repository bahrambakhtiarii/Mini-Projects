import {useState} from 'react';
import GetContent from './GetContent';
import ShowMessage from './ShowMessage';
import ChoseLang from './ChoseLang';



function App() {

  
  const [data , setData] = useState('');
  const [number , setNumber] = useState('');
  const [typeFact , setTypeFact] = useState('year');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [lang, setLang] = useState('fa');
  const [direction, setDirection] = useState('rtl');
  
  const translateText = async (data, lang = "fa") => {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(data)}&langpair=en|${lang}`
      );
  
      if (!response.ok) {
        throw new Error("Translation failed.");
      }
  
      const result = await response.json();
      setData(result.responseData.translatedText);
      
    } catch (error) {
      console.error("Translation failed:", error);
      setError(error.message);
    }
  };
  
  

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const API_URL = `http://numbersapi.com/${number}/${typeFact}`;

    try{
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Did not received ...');
      const resulte = await response.text();
      if (lang === 'fa') {
        translateText(resulte);
      }else{
        setData(resulte);
      }
      setError(null);
    }catch (err){
      setError(err.message);
    }finally{
      setIsLoading(false);
    }

  }

  


  return (
    <main style={{direction}}>
      <ChoseLang 
        lang={lang}
        setLang= { setLang }
        setDirection={setDirection}
      />
      <GetContent 
        number={number}
        setNumber={setNumber}
        typeFact={typeFact}
        setTypeFact={setTypeFact}
        handleSubmit={handleSubmit}
        lang={lang}
      />
      <ShowMessage 
        data={data}
        error={error}
        isLoading={isLoading}
        lang={lang}
      />
      
    </main>
  );
}

export default App;
