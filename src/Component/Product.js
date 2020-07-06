import React, { Component } from 'react';

class Product extends Component {

    constructor(props){
        super(props)
    
    }
  render() {
      let productName=this.props.productNamepart1+this.props.productNamepart2+" ";
      return (
        <div className="MainProduct"  onMouseDown={this.props.productInfo}>
                <div>
                  <a href="#">
                  <img id={productName} src={this.props.source} className="ClockImagestyle"/>
                  </a>
                </div>

                <div id={productName} className="ProductDetails">
                  <div id={productName} className="ProductName">
                    <a id={productName} href="#" >{this.props.productNamepart1}<br></br>{this.props.productNamepart2}</a>
                  </div>

                  <div id={productName} className="ProductPrice">
                    <label id={productName} className="Price">{this.props.price}</label>
                    <i id={productName} style={{float: "right"}} className="icon-shopping-cart"></i>{" "}
                    <i id={productName} style={{float: "right"}} className="icon-heart-empty"></i>
                  </div>
                </div>

        </div>
      );
  }
}

export default Product;