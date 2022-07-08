import "./App.css";
import React, { Component } from "react";
import { Divider, Grid } from "semantic-ui-react";
import SidePane from "./sidepane/SidePane";
import firebase from "../firebase";
import { clearUser, setUser } from "../redux/users/userActions";
import { connect } from "react-redux";
import TopHeaderPane from "./TopPane/TopHeaderPane";
import ContentPane from "./ContentPane/ContentPane";
import EmptyContentMessage from "./ContentPane/EmptyContentMessage";

export class App extends Component {
  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.clearUser();
      });
  };
  render() {
    const {workDate,workDateData,refreshWorkDateDataId}=this.props
    return (
      <Grid stretched style={{ background: "#eee" }} stackable>
        <Grid.Column width="4">
          <SidePane onSignout={this.handleSignout}></SidePane>
        </Grid.Column>
        <Grid.Column width="12">
          <Grid>
            <Grid.Column width="16">
              <Grid.Row>
                <TopHeaderPane/>
              </Grid.Row>
              <Divider></Divider>
              <Grid.Row>
                {
                  this.props.workDateData ? 
                  <ContentPane key={`${workDateData.id}${refreshWorkDateDataId}`}
                    workDateId={workDateData.id} workDate={workDate}
                  /> : <EmptyContentMessage key={workDate} workDate={workDate}/>
                  }
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}
const mapStateToProps=({workDates:{workDateData, workDate,refreshWorkDateDataId}})=>({
  workDateData:workDateData,
  workDate: workDate,
  refreshWorkDateDataId
})
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser()),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
