import React, { Component } from 'react';
import logo from './logo.svg';
import MountainCreek from './Photos/Mountain_creek.jpg';
import Gawain from './Photos/Gawain.jpg';
import Childs from './Photos/Childs.jpg';
import FallDusk from './Photos/Fall_Dusk.jpg';

import './App.css';
import Product from './Component/Product';

class App extends Component {

  productInfo(event){
        if(event.button === 2){
          alert(event.target.id);
          console.log("Product is : "+event.target.id);
        }
        
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wooden Watches</h1>
        </header>
        
        <div className="ProductContent">
            
            <Product productInfo={this.productInfo} source={MountainCreek} productNamepart1="MOUNTAIN CREEK"
             productNamepart2=" (LEADWOOD/ROYAL BLUE)" price="$299.00" />

            <Product productInfo={this.productInfo} source={Gawain} productNamepart1="GAWAIN"
             productNamepart2=" (AMARNATH/AMARNATH)"price="$309.00" />

             <Product productInfo={this.productInfo} source={Childs} productNamepart1="CHILDS"
             productNamepart2=" (LEADWOOD/LEADWOOD)" price="$239.00" />

             <Product productInfo={this.productInfo} source={FallDusk} productNamepart1="FALL DUSK"
             productNamepart2=" (WALNUT/MAPLE)" price="$159.00" />

        </div>
      </div>
    );
  }
}

export default App;
