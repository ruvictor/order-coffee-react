import Coffee from '../coffee/Coffee';
import './Sizes.css';

const Size = (props) => {
    
    return (
        <>
            <div className="StepTitle">Choose your Size</div>
            <div className="Sizes">
                <Coffee nextStep={props.nextStep} size='small' />
                <Coffee nextStep={props.nextStep} size='medium' />
                <Coffee nextStep={props.nextStep} size='large' />
            </div>
        </>
    );
}

export default Size;