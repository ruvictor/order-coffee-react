import React, { Component } from 'react';
import styled from 'styled-components';
import './Coffee.css';

const Vapour1 = styled.span`--v:1;`;
const Vapour2 = styled.span`--v:2;`;
const Vapour3 = styled.span`--v:3;`;
const Vapour4 = styled.span`--v:4;`;
const Vapour5 = styled.span`--v:5;`;
const Vapour6 = styled.span`--v:6;`;
const Vapour7 = styled.span`--v:7;`;
const Vapour8 = styled.span`--v:8;`;
const Vapour9 = styled.span`--v:9;`;
const Vapour10 = styled.span`--v:10;`;
const Vapour11 = styled.span`--v:11;`;
const Vapour12 = styled.span`--v:12;`;

class Coffee extends Component{

    state = {
        clicked: ''
    }
    

    chooseCoffee = (size) => {
        console.log(size);
        this.setState({clicked: size})
        // return size;
    }
    
    render(){
        let style = {
            height: this.props.size === 'small' ? '200px' : 
            this.props.size === 'medium' ? '250px' : ''
        };
        return (
            <div className="coffeeBlock" onClick={() => this.chooseCoffee(this.props.size)}>
                <div className="coffee">
                    <div className="vapour">
                        <Vapour1></Vapour1>
                        <Vapour2></Vapour2>
                        <Vapour5></Vapour5>
                        <Vapour4></Vapour4>
                        <Vapour6></Vapour6>
                        <Vapour3></Vapour3>
                        <Vapour7></Vapour7>
                        <Vapour8></Vapour8>
                        <Vapour9></Vapour9>
                        <Vapour10></Vapour10>
                        <Vapour11></Vapour11>
                        <Vapour12></Vapour12>
                    </div>
                </div>
                <div className="lid"></div>
                <div className="cup" style={style}></div>
                <div className="bottom"></div>
            </div>
        )
    }
}

export default Coffee;