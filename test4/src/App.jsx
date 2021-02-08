import { useEffect, useState } from "react";
import { getLaunches, getRockets } from "./service";

const App = () => {

  const [launches,setLaunches] = useState([])
  const [select,setSelect] = useState('')
  const [rockets,setRockets] = useState([])

  useEffect(() => {
    getLaunches().then(res=> setLaunches(res.data))
  },[])

  useEffect(() => {
    getRockets().then(res => setRockets(res.data))
  },[])

  // const showLess = (launches) => {
  //   if(select.value === 'show10') return launches.slice(0,11)
  //   if(select.value === 'show20') return launches.slice(0,21)
  //   if(select.value === 'show50') return launches.slice(0,51)
  // }

  return (
    <div>
      <select onChange={(e) => setSelect(e.target.value)}>
        <option defaultValue='showall' >Show all</option>
        {<option /* onClick={showLess} */ value='show10'>Show 10</option>}
        <option /* onClick={showLess} */ value='show20'>Show 20</option>
        <option /* onClick={showLess} */ value='show50'>Show 50</option>
      </select>

      {launches.map(launch => <div key={launch.id}>
        <p>{launch.name}</p>
        <img src={launch.links.patch.small} alt={`Image of ${launch.name}`} style={{width:'100px'}} />
        <p>{launch.static_fire_date_unix ? launch.static_fire_date_unix : 'There is no date'}</p>
        <button onClick={()=> {rockets.map(rocket => 
        <p key={rocket.id}>{`Rocket name: ${rocket.name} --- Status: ${rocket.active}`}</p> 
          )}} >Show Rocket</button>
        <hr/>
      </div>)}

    </div>
  )
}

export default App;
