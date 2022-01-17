import { useState } from "react"

function App() {
  const [data, setData] = useState("");


  var fetching = fetch(`http://0.0.0.0:8000/get`)
  fetching.then((res)=>{
    console.warn(res.status)
  })
  fetching.then((res) => res.json())
  .then((json) => {
    // window.alert(json.hello)
    setData(json.data)
  })

  return (
    <div className="App">
      Hello<br/>
      {data}  
    </div>
  );
}

export default App;
