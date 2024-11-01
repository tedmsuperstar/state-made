import { useEffect, useState } from 'react'
import ProductCardList from "./components/ProductCardList"
import './App.css'


function getList() {
  return fetch('http://localhost:8881/wp-json/state-made/v1/product/explore')
    .then(data => data.json())
}

function App() {

  //http://localhost:8881/wp-json/wp/v2/product

  const [list, setList] = useState([]);
  
  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
  }, [])

  return (
    <>
      <ProductCardList list={list} />
    </>
  )
}

export default App
