import { CardImg } from 'reactstrap'
import ImgModal from './ImageModal'

const ImageHero = (props) => {

    const checkVal = () => {
        if (props?.item?.hero) {
            return (
                <div>
                    <CardImg className="mb-3" style={{ maxWidth: '75%' }} src={props.item.hero.href} />
                    <ImgModal images={props.item.images} />
                </div>

            )
        } else if (props?.item?.thumbnail) {
            return (
                <div>
                    <CardImg className="mb-3" style={{ maxWidth: '75%' }} src={props.item.thumbnail.href} />
                    <ImgModal images={props.item.images} />
                </div>
            )
        } else {
            return <div className="mt-4">
                <p>Images unavailable.</p>
            </div>
        }
    }

    return (checkVal())
}

export default ImageHero