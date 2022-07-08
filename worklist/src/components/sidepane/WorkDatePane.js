import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react";
import { connect } from 'react-redux'
import {setWorkDate,setWorkDateData} from '../../redux/workdates/workDateActions'
import firebase from "../../firebase";

class WorkDatePane extends Component {
  state = {
    workDateRef: firebase.database().ref('workdates')
  };
  componentDidMount(){
    const now = new Date()

    const day =(''+(now.getDate()+100)).substr(1,2)
    const month=(''+(now.getMonth()+101)).substr(1,2)

    const st=''+day+'-'+month+'-'+now.getFullYear()

    this.handleWorkDateChange(null,{name:'',value:st})
  }
  handleWorkDateChange = (event, { name, value }) => {
    this.props.setWorkDate(value)

    this.state.workDateRef.orderByChild('date')
    .equalTo(value)
    .once('value')
    .then((snapshot)=>{
      if(snapshot.val()){
        const data=snapshot.val();
        const key=Object.keys(data)[0]

        this.props.setWorkDateData(data[key])
      }
      else{
        this.props.setWorkDateData(null)
      }
    })
  };
  render() {
    return (
      <DateInput
        name="date"
        inline
        placeholder="Date"
        value={this.props.workDate}
        onChange={this.handleWorkDateChange}
      ></DateInput>
    );
  }
}

const mapStateToProps = ({workDates:{workDate}}) => ({
  workDate:workDate
})

const mapDispatchToProps =(dispatch)=> ({
  setWorkDate:(workDate)=>dispatch(setWorkDate(workDate)),
  setWorkDateData:(data)=>dispatch(setWorkDateData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkDatePane)
