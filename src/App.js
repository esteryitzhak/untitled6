
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

            <ButtonComponent
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
