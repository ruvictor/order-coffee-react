import Coffee from '../coffee/Coffee';
import './Sizes.css';

const Size = (props) => {
    
    return (
        <>
            <div className="StepTitle">{props.clickedSize ? props.clickedSize : 'Choose your Size'}</div>
            <div className="Sizes">
                <Coffee
                    clickedSize={props.clickedSize}
                    clickedItem={props.clickedItem}
                    nextStep={props.nextStep}
                    size='small'
                />
                <Coffee
                    clickedSize={props.clickedSize}
                    clickedItem={props.clickedItem}
                    nextStep={props.nextStep}
                    size='medium'
                />
                <Coffee
                    clickedSize={props.clickedSize}
                    clickedItem={props.clickedItem}
                    nextStep={props.nextStep}
                    size='large'
                />
            </div>
        </>
    );
}

export default Size;