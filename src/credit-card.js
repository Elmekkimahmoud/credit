import React, { Component } from 'react';
class Credit extends Component {
    constructor() {
        super();
        this.state = {

            Number: '****', Name:'foulen', Valid: 'MM/YY', 
        };
       
        
    }
    
    changeNumber=(e)=> {
        var srt1= ''+e.target.value
        if((Number(e.target.value))&& (srt1.length==16) ){
             this.setState({Number:e.target.value}); }
    }

    changeName=(e)=> {
        var srt2= ''+e.target.value
        if((!Number(e.target.value)) &&(srt2.length<=20) ) {
        this.setState({Name:e.target.value.toUpperCase()});
        }
    }

    changeDate=(e)=> {
       
       // if (Number(e.target.value)) {
           
            if (e.target.value.length===2) {
                e.target.value= e.target.value +'/';
               
            };

            //condition mm  entre 1 + 12
            if ((e.target.value.length===1)&&(e.target.value>1) ) {
                e.target.value= '0'+e.target.value+'/' ;
               
            };

            if (/[0-9]/.test(e.target.value)==true) {
                this.setState({Valid:e.target.value}); 
            }
               
        
    }
    
    
    render() { 
        return (

            <section className='contenair'>

                <div className='card'>
                    <span>GO MY CODE</span>
                    <img id='img1' src={'data:image/jpeg;base64,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'} width='40px'/>  
                    <span id= 'numero'>{this.state.Number}</span>
                    <span id='date'>{this.state.Valid}</span>
                    <img id='img2' src={'https://i.pinimg.com/originals/f5/3b/45/f53b45c09667dc7c31613a5ec6c15ea4.png'} width='100px' height='60px'/>
                    <span>{this.state.Name}</span>
                </div>

                <form className="informations" >
                    <input placeholder='Card Number' onChange={this.changeNumber} ></input>
                    <input placeholder='User Name' onChange={this.changeName} ></input>
                    <input placeholder='Validity MM/YY' onChange={this.changeDate} maxLength='5'></input>
                    
                    
                </form>

            </section>
          );
    }
}
 
export default Credit;