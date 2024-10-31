import ProductCardList from "./components/ProductCardList";
import './App.css'


function App() {

  const cards = [
    {name: "Greenland Whale", brand: "Whales", displayPrice:"$999.99", image1x:"https://upload.wikimedia.org/wikipedia/commons/5/5c/GreenlandWhaleLyd3.jpg", image2x:"https://upload.wikimedia.org/wikipedia/commons/5/5c/GreenlandWhaleLyd3.jpg",displayLocation:"California",url:"https://www.google.com"},

    {name: "Whale Skeleton", brand: "Whales", displayPrice:"$199.99", image1x:"https://upload.wikimedia.org/wikipedia/commons/8/8d/Sperm_whale_skeleton_labelled.jpg", image2x:"https://upload.wikimedia.org/wikipedia/commons/8/8d/Sperm_whale_skeleton_labelled.jpg",displayLocation:"Connecticut",url:"https://www.google.com"},

    {name: "Baleen", brand: "Whales", displayPrice:"$99.99", image1x:"https://upload.wikimedia.org/wikipedia/commons/5/5c/GreenlandWhaleLyd3.jpg", image2x:"https://upload.wikimedia.org/wikipedia/commons/5/5c/GreenlandWhaleLyd3.jpg",displayLocation:"California",url:"https://upload.wikimedia.org/wikipedia/commons/2/28/Baleen_parts.png"},
]


  return (
    <>
      <ProductCardList cards={cards}/>
    </>
  )
}

export default App
