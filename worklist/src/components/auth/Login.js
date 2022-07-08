import React, { Component } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Grid,Header,Icon,Form,Segment,Button,Message } from 'semantic-ui-react'
import './Login.css'
import firebase from '../../firebase'

class Login extends Component {
    state={
        email:'',
        password:'',
        loading:false,
        errors:[]
    }

    handleChange=(event)=>{
        const {name,value} = event.target
        this.setState({[name]:value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()

        if(this.isFormValid()){
            this.setState({errors:[],loading:true})
            const {email,password,errors}=this.state

            firebase.auth()
            .signInWithEmailAndPassword(email,password)
            .then((signedInUser)=>{
                console.log(signedInUser);
                this.setState({loading:false})

                this.props.navigation('/')
            }).catch(err=>{
                console.log(err)
                this.setState({errors:[...errors,err],loading:false})
            })
        }
    }
    isFormValid=()=>{
        if(!(this.state.email && this.state.password)){
            const error = {message:'Email or password is empty'}
            this.setState({errors:[error]})
            return false;
        }
        return true
    }
    handleInputError=(errors,inputName)=>{
        return errors.some(error=> error.message.toLowerCase().includes(inputName)) ? 'error' : ''
    }
    
    displayErrors=(errors)=>errors.map((error,i)=><p key={i}>{error.message}</p>)
    render() {   
        const {loading,errors}=this.state;
        return (
            <Grid textAlign='center' verticalAlign='middle' className='app'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' icon color='violet'>
                        <Icon name='code branch' color='violet'></Icon>
                        Login to WorkList
                    </Header>
                    <Form onSubmit={this.handleSubmit} size='large'>
                        <Segment stacked>
                            <Form.Input fluid name='email' icon='mail' iconPosition='left'
                                placeholder='Email Address' type='email' onChange={this.handleChange}
                                className={this.handleInputError(errors,'email')}>
                            </Form.Input>
                            <Form.Input fluid name='password' icon='lock' iconPosition='left'
                                placeholder='Password' type='password' onChange={this.handleChange}
                                className={this.handleInputError(errors,'password')}>
                            </Form.Input>
                            <Button className={loading? 'loading':''} color='violet' fluid size='large'>Login</Button>
                        </Segment>
                    </Form>
                    {errors.length>0 && 
                        (<Message error>
                                <h3>Error</h3>
                                {this.displayErrors(errors)}
                        </Message>)
                    }
                    <Message>
                        Don't have an account? <Link to='/register'>Register</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default function Foo(props) {
    const navigation = useNavigate();
  
    return <Login {...props} navigation={navigation} />;
}
