import React, {Component} from "react";
import product from '../Product/product.jpg';


class CardProduct extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(5);
    }

    handlePlus = () => {
        this.setState({
                order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })    
    }

    handleMinus = () => {
        if(this.state.order > 0) {
        this.setState({
           order: this.state.order - 1 
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }
}

    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src={product} alt="product_image"/>

                </div>
                    <p className="product-title">Daging Ayam bumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                    <p className="product-price">Rp. 410.000</p>
                    <p className="counter"/>
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>+</button>

                </div>
        );
    }
}

export default CardProduct;