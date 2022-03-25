import React,{Component} from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import  {NavLink} from 'react-router-dom';
class Header extends Component{
    constructor(props)
    {
        super(props);
        this.state= {
            isNavOpen:false
        };
        this.toggleNav= this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen:  !this.state.isNavOpen
        });
    }

    render(){
        return(
            //react fragment - this enable to group together  bunch of react element and return it 
            <React.Fragment>
            <Navbar dark expand="md" >
            <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand  className="mr-auto"  href="/"><img src="assets/images/logo192.png"  width="30"  alt="React resturant" />  React Resturant</NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span></NavLink>
                </NavItem>
            </Nav>
            </Collapse>

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