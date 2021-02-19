import Coffee from '../coffee/Coffee';
import './Sizes.css';

const Size = () => {
    return (
        <>
            <div className="StepTitle">Choose your Size</div>
            <div className="Sizes">
                <Coffee size="small" />
                <Coffee size="medium" />
                <Coffee size="large" />
            </div>
        </>
    );
}

export default Size;