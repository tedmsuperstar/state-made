import ProductCard from './ProductCard';

function ProductCardList(props: any): JSX.Element {

    const cards = props.cards || []

    return (
        <ul className="product-card-list">
        {cards.map((card: any) => {return <li><ProductCard name={card.name} brand={card.brand} image1x={card.image1x} image2x={card.image2x} url={card.url} displayLocation={card.displayLocation} displayPrice={card.displayPrice}/></li>})}          
        </ul>
    )
}   

export default ProductCardList