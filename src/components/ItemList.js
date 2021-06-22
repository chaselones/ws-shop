import Price from './Price'
import ImageHero from './ImageHero'


import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ItemList = (props) => {

    const mappedItems = props.items.map((item) =>
        <div
            className="col-xs-12 col-md-4 d-flex mt-3 mb-2"
            key={item.id}
            style={cardStyles}
        >
            <Card className='w-100' style={{ display: 'flex' }}>
                <CardBody>
                    <CardTitle>
                        <h4>
                            {
                                item.name
                                    .replace(/&amp;/g, '&')
                                    .replace(/&#160;/g, '')
                            }
                        </h4>
                    </CardTitle>

                    <ImageHero item={item} />

                    <CardSubtitle>
                        <Price product={item} />
                    </ CardSubtitle>

                </CardBody>

                <Button className="btn-sm" href={item.links.www}>Details</Button>
            </Card>
        </div >

    )

    return (
        <div className="container-fluid">
            <div className="row card-deck">{mappedItems}</div>
        </div>
    )
}

const cardStyles = {
    textAlign: 'center',
    justifyContent: 'center',
}

export default ItemList