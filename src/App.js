
import React from 'react';
import ButtonComponent from "./components/ButtonComponent";

class App extends React.Component{

    state = {
        index:0
    }

render(){
    return(
        <div>
            <div style={{backgroundColor: 'red'}}>
            <ButtonComponent
            onClick = {()=>{
             this.setState({
                 index:this.state.index
             })
            }}title = {"first button"}/>
            </div>
            git config --global user.email "estery6@walla.co.il" git config --global user.name "esteryitzhak"
            <ButtonComponen
                onClick = {()=>{
                    this.setState({
                        index:this.state.index
                    })
                }}
                title = {"second button"}/>

            <ButtonComponent
                onClick = {()=>{
                    this.setState({
                        index:this.state.index
                    })
                }} title = {"third button"}/>

        </div>
    )
}

}

export default App;
