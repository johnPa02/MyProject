import React, { Component } from 'react'
import { DateInput } from 'semantic-ui-calendar-react'
import { Button, Divider, Grid, Header, Icon, Menu, Segment,  } from 'semantic-ui-react'

class Home extends Component {
    state={
        date:''
    }
    handleWorkDateChange=(event,{name,value})=>{
        console.log(value)
    }
    render() {
        return (
            <Grid stretched style={{background:'#eee'}} stackable>
                <Grid.Column width='4'>
                    <Segment>
                        <Header>
                            <Icon name='tasks'></Icon>
                            <Header.Content>WorkList</Header.Content>
                        </Header>
                        <Divider></Divider>

                        <Menu vertical style={{width:'100%'}}>
                            <Menu.Item name='user'>
                                <Icon name='user circle'></Icon> User
                            </Menu.Item>
                            <Menu.Item name='key'>
                                <Icon name='key'></Icon> Change Password
                            </Menu.Item>
                            <Menu.Item name='signout'>
                                <Icon name='sign out alyernate'></Icon> Sign out
                            </Menu.Item>
                        </Menu>
                        <Divider></Divider>

                        <DateInput name='date' inline placeholder='Date' value={this.state.date}
                        onChange={this.handleWorkDateChange} ></DateInput>
                    </Segment>
                </Grid.Column>

                <Grid.Column width='12'>
                    <Grid>
                        <Grid.Column width='16'>
                            <Grid.Row>
                                <Segment clearing>
                                    <Header>
                                        <Icon name='calendar'></Icon>
                                        <Header.Content><h1>Date:12/7/2021</h1></Header.Content>
                                    </Header>
                                    <Button icon='plus' floated='right'></Button>
                                </Segment>
                            </Grid.Row>
                            <Divider></Divider>
                            <Grid.Row>
                                <Grid>
                                    <Grid.Column width='8'>
                                        <Segment stacked>
                                            <Header>
                                                <Icon name='bell' color='red'></Icon>
                                                <Header.Content>TO-DO</Header.Content>
                                            </Header>
                                            <Divider></Divider>
                                            <Segment attached clearing>
                                                Do HomeWork
                                                <Button icon='trash alternate' inverted color='red' 
                                                size='tiny' floated='right'></Button>
                                                <Button icon='checkmark' inverted color='green' 
                                                size='tiny' floated='right'></Button>
                                            </Segment>
                                            <Segment attached clearing>
                                                Do HomeWork
                                                <Button icon='trash alternate' inverted color='red' 
                                                size='tiny' floated='right'></Button>
                                                <Button icon='checkmark' inverted color='green' 
                                                size='tiny' floated='right'></Button>
                                            </Segment>
                                            <Segment attached clearing>
                                                Do HomeWork
                                                <Button icon='trash alternate' inverted color='red' 
                                                size='tiny' floated='right'></Button>
                                                <Button icon='checkmark' inverted color='green' 
                                                size='tiny' floated='right'></Button>
                                            </Segment>
                                        </Segment>
                                    </Grid.Column>

                                    <Grid.Column width='8'>
                                        <Segment stacked>
                                            <Header>
                                                <Icon name='calendar check outline' color='green'></Icon>
                                                <Header.Content>DONE</Header.Content>
                                            </Header>
                                            <Divider></Divider>
                                            <Segment attached clearing>
                                                Do HomeWork
                                                <Button icon='trash alternate' inverted color='red' 
                                                size='tiny' floated='right'></Button>
                                                <Button icon='checkmark' inverted color='green' 
                                                size='tiny' floated='right'></Button>
                                            </Segment>
                                            <Segment attached clearing>
                                                Do HomeWork
                                                <Button icon='trash alternate' inverted color='red' 
                                                size='tiny' floated='right'></Button>
                                                <Button icon='checkmark' inverted color='green' 
                                                size='tiny' floated='right'></Button>
                                            </Segment>
                                            <Segment attached clearing>
                                                Do HomeWork
                                                <Button icon='trash alternate' inverted color='red' 
                                                size='tiny' floated='right'></Button>
                                                <Button icon='checkmark' inverted color='green' 
                                                size='tiny' floated='right'></Button>
                                            </Segment>
                                        </Segment>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Home
