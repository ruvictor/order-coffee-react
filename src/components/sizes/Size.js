import Coffee from '../coffee/Coffee';
import './Sizes.css';

const Size = (props) => {
    console.log(props)
    return (
        <>
            <div className="StepTitle">Choose your Size</div>
            <div className="Sizes">
                <Coffee onClick={props.onClick(1)} size='small' />
                <Coffee size='medium' />
                <Coffee size='large' />
            </div>
        </>
    );
}

export default Size;