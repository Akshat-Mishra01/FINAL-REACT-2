import React, { Component } from 'react'
import  './Form.css'

class FormClass extends Component {
    state = {
        Name : ' ',
        Dept:' ',
        Rating:' ',
        EmpData :[]
    }
    changeHandle =(event)=>{
        this.setState({[event.target.name] : event.target.value})  
        // console.log(this.state.Name);  //for update state
    }

    clickHandle =()=>{
        let newObj ={
            name:this.state.Name,
            dept: this.state.Dept,
            Rating: this.state.Rating
        }
        this.state.EmpData.push(newObj);//push data in EMPDATA
        this.setState({EmpData :this.state.EmpData})//update employe data
        console.log(this.state.EmpData);
    }
  render() {
    return (
      <div>
        <form className='Form'>
        <label htmlFor="name" >Name:   </label>
        <input type="text" id="name" placeholder='Enter Name' name='Name' onChange={this.changeHandle} value={this.state.Name}  required className='block' /> <br/> <br />
        <label htmlFor="name" >Department:  </label>
        <input type="text" id="name" placeholder='Enter Name' name='Dept' onChange={this.changeHandle} value={this.state.Dept}  required className='block' /> <br /><br />
        <label htmlFor="name" >Rating:   </label>
        <input type="text" id="name" placeholder='Enter Name' name='Rating' onChange={this.changeHandle} value={this.state.Rating}  required className='block' /> <br /><br />

        <button type='button' onClick={this.clickHandle} className='block1'>Submit</button>
        <br />
        </form>
        <div className='box'>
      
          {this.state.EmpData.map((item,index)=>{
            return(
             <>
                 
                <span >Name:{item.name} | Dept:{item.dept} | Rating:{item.Rating} </span>
              
             </>
            )
        })}
         
        </div>
      </div>
    )
  }
}

export default FormClass