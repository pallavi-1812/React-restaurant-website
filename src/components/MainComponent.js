import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from './shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    onSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }
    render() {
        return (
            <div className="App">
                <Header />
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onSelect(dishId)} />
                <DishDetail
                    dish={this.state.dishes
                        .filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        );
    }
}


export default Main;