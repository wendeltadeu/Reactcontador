import React from "react";

class App extends React.Component{

  constructor(){
    super()
    this.state={
      nome:""
    }
  }

  alterarNome = (event) => {
    this.setState({nome: event.target.value})
  }

  render(){
    return(

        <div>
            <input 
                  type="text" 
                  value={this.state.nome}
                  onChange={this.alterarNome}
                  />
            <p>Esse texto contém:{this.state.nome} Caracters</p>
        </div>
    )

  }
  
}

export default App;
