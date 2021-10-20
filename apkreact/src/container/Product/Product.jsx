import React, { Component, Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";
import './Product.css';
import logo from '../Product/logo.jpg';
import cart from '../Product/cart.png';


class Product extends Component {
    state = {
        order: 0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="troley">
                        <img src={cart} alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        );
    }
}

export default Product;