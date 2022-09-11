import { useRef, useState } from 'react';
import './App.css';
import ImageContent from './Conponents/ImageContent';

function App() {

  const [fetchData,setFetchData] = useState([]);

  const ref = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const URL = `https://pixabay.com/api/?key=29108326-558170e759e79439274d72dc6&q=${ref.current.value}&image_type=photo`;

    fetch(URL).then((res) => {
      return res.json();
    }).then((data) => {
      setFetchData(data.hits);
    })

  }


  return (
    <div className="App">
      <h1>What images are you looking for?</h1>
      <form>
        <input type="text" placeholder='画像を検索' ref={ref}/>
        <button onClick={(e) => handleSubmit(e)}>検索</button>
      </form>
      <ImageContent fetchData={fetchData}/>
    </div>
  );
}

export default App;
