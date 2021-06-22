//Returns a price depending on which price object was available
const Price = (props) => {
    const checkVal = () => {
        if (props?.product?.price?.regular) {
            return (
                <p>{`$${parseFloat(props.product.price.regular).toFixed(2)}`}</p>
            )
        } else if (props?.product?.priceRange?.regular) {
            return (
                <p>{`$${parseFloat(props.product.priceRange.regular.low).toFixed(2)}`} - {`$${parseFloat(props.product.priceRange.regular.high).toFixed(2)}`}</p>
            )
        } else if (props?.product?.priceRange?.selling) {
            return (
                <p>{`$${parseFloat(props.product.priceRange.selling.low).toFixed(2)}`} - {`$${parseFloat(props.product.priceRange.selling.high).toFixed(2)}`}</p>
            )
        } else {
            return null
        }
    }

    return (checkVal())
}

export default Price