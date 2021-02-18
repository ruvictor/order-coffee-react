import Coffee from '../coffee/Coffee';
import './Sizes.css';

const chooseSize = (size) => {
    console.log(size);
}

const Size = () => {
    return (
        <>
            <div className="StepTitle">Choose your Size</div>
            <div className="Sizes">
                <Coffee onClick={() => chooseSize('small')} size="small" />
                <Coffee size="medium" />
                <Coffee size="large" />
            </div>
        </>
    );
}

export default Size;