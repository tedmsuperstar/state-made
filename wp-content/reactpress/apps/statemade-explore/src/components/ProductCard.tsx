
function ProductCard(props: any): JSX.Element {

    const name = props.name || ""
    const brand = props.brand || ""
    const displayPrice = props.displayPrice || ""
    const displayLocation = props.displayLocation || ""
    const image1x = props.image1x || ""
    const image2x = props.image2x || image1x
    const srcSet = `${image1x} 1x, ${image2x} 2x`
    const url = props.url || ""

    return (
 
        <>
            <article className='product-card'>
                <div >
                    <img  
                    alt={name}
                    srcSet={srcSet}
                    src={image1x}/>
                </div>
                <section>
                    <div>
                        <h4>{brand}</h4>
                        <h3>
                            <h5>{displayLocation}</h5>
                            <a title={name} href={url}><span>{name}</span></a>
                        </h3>
                    </div>
                </section>
                <div >
                    <span>{displayPrice}</span>
                </div>
            </article>
        </>
    );
}   

export default ProductCard;