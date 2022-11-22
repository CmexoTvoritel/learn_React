import React from 'react';

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.onClickMinus = this.onClickMinus.bind(this);
        this.onClickPlus = this.onClickPlus.bind(this);
    }

    onClickMinus() {
        this.setState({count: this.state.count - 1});
    }
    onClickPlus() {
        this.setState({count: this.state.count + 1})
    }

    render () {
        return(
        <div>
            <h2>Счетчик:</h2>
            <h1>{this.state.count}</h1>
            <button onClick={this.onClickMinus} className='minus'>- Минус</button>
            <button onClick={this.onClickPlus} className='plus'>Плюс +</button>
        </div>
        );
    }
}

export default ClassCounter;