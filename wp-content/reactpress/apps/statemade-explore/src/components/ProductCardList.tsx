import ProductCard from './ProductCard';

function ProductCardList(props: any): JSX.Element {

    const list = props.list || []
    
    if(list.items){
    return (
        
        <ul className="product-card-list">
        {list.items.map((card: any) => {return <li><ProductCard name={card.name} brand={card.brand} image1x={card.image1x} image2x={card.image2x} url={card.url} displayLocation={card.display_location} displayPrice={card.display_price}/></li>})}  
              
        </ul>
    )
    }

    return <>Loading</>
}   

export default ProductCardList