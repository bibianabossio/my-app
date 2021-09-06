import React, {Component} from 'react';
//import './TaskForm.css';

export default class TaskForm extends Component{
    state ={
        title:'',
        description: ''
    }
 
onSubmit = e => {
    this.props.addTask (this.state.title, this.state.description)
    e.preventDefault();
}
onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
    })
}

render(){
    return (
        <div class= "letra">
            <h2>Iniciar Sesión</h2>
        <form onSubmit={this.onSubmit}>
        <label htmlFor="new-todo">
        
            Usuario: 
            <br/> 
          </label>
            <input
                 type="text" 
                 name= "title"
                 placeholder="" 
                 onChange={this.onChange} 
                 value={this.state.title}/>
            <br />
            <br />
            <br />
            <label htmlFor="new-todo">
            Contraseña: 
            <br/> 
          </label>
            <input
                name= "description"
                placeholder= "" 
                onChange={this.onChange} 
                value={this.state.description}/>
            <br/> 
            <br/> 
            <div class= "alinearBoton">
                  <button class= "button ">Ingresar</button>
                  <button class= "button ">Recuperar Contraseña</button>
            </div>

            <br/> 
        </form>
        </div>
    )
}
}

