import React,{Component} from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Button,Modal,ModalBody,ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap';
import  {NavLink} from 'react-router-dom';
class Header extends Component{
    constructor(props)
    {
        super(props);
        this.state= {
            isNavOpen:false,
            isModalOpen: false
        };
        this.toggleNav= this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen:  !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(e){
        this.toggleModal();
        alert("username : " +this.username.value + " Password : "+this.password.value+
        " remember "+this.remember.checked);
        e.preventDefault();
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
            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>

            </Collapse>

            </div>{/* this container contain navigation bar */}
            </Navbar>

            {/* jumbotron */}
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor='username' > Username</Label>
                            <Input type='text' id='username' name='username' innerRef={(input) => this.username = input}/>
                            <Label htmlFor='password' > Password</Label>
                            <Input type='password' id='password' name='password' innerRef={(input)=> this.password = input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' name='remember' innerRef={(input)=> this.remember = input} />
                                 Saved Login Info
                            </Label>

                        </FormGroup>
                        <Button type="submit" value='submit' color='primary'>Login</Button>
                    </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
            
        );
    }
}

export default Header;