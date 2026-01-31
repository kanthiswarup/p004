import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {data:{
      name: "T.kanthi",
      role: "developer",  
      bio: "loves coding",
      status:[{label:"followers",value:"1k"},{label:"following",value:"500"},{label:"message"}]   
    }};
  }
  render() {
    const {data} = this.state;  
    const BASEURL=import.meta.env.BASE_URL;
    return (
      <div className='app'>

        <h1>Welcome to my project</h1>

                <div className='profile'>
                    <img src={BASEURL+"class.jpeg"} alt='' />
                    <div className='info'>
                        <legend className='name'>{data.name}</legend>
                        <legend className='role'>{data.role}</legend>
                        <legend className='bio'>{data.bio}</legend>
                        <button className='follow'>Follow</button>
                        <button className='message'>Message</button>
                    </div>
                </div>
                <div className='status'>
                    {data.status.map((d)=>(
                      <div className='info'>
                            <legend className='value'>{d.value}</legend>
                            <legend className='label'>{d.label.toUpperCase()}</legend>
                        </div>
                    ))}
                </div>
            </div>
  
  
    );
  }
}   
