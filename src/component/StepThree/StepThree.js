import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {update_money} from '../../ducks/reducer'


class StepThree extends Component{
    handleChange(input,val){
        if(input === 'mortgage'){this.setState({mortgage:val})}
        if(input === 'rent'){this.setState({rent:val})}
        
    }
    addHome(){
        const {name,address,city,state,zipcode} = this.state
        axios.post('/api/houses',{name,address,city,state,zipcode}).then(result =>{
            
        })
    }
    render(){
        return(
            <div>
            <input 
                placeholder='Mortgage' 
                type="text"
                onChange={(e)=>{ this.handleChange('mortgage',e.target.value)}}
            />
            <input 
                placeholder='Rent' 
                type="text" 
                onChange={(e)=>{ this.handleChange('rent',e.target.value)}}
            />
            <Link to='/'> 
                <button onClick={()=> this.update_money()}>
                    Complete
                </button> 
            </Link>
            {JSON.stringify(this.state)}
            </div>
        )
    }
} 
function mapState(state){
    let {name,address,city,curState,zipcode,mortgage,rent} = state
    return{
        name,
        address,
        city,
        curState,
        zipcode,
        mortgage,
        rent
    }
}

export default connect(mapState,{update_money})(StepThree)