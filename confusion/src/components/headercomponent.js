import React,{Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component{
    render(){
        return(
            //react fragment - this enable to group together  bunch of react element and return it 
            <React.Fragment>
            <Navbar dark >
            <div className="container">
            <NavbarBrand href="/">Confusion Resturant</NavbarBrand>
            </div>{/* this container contain navigation bar */}
            </Navbar>
                <div className="container jumbotron mt-3">
                    <div class="mt-3 p-2  text-black rounded">
                    <div className="col-12 col-sm-6 ">
                    <h1>React Resturant</h1>
                    <br></br>
                    <p>we take risk to cook food for you ❤. </p>
                    <p>Chef are busy let meet's at table. </p>
                    </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Header;