import React from 'react'

export default class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topT:"",
            bottomT:"",
            randomImg:"https://indianmemetemplates.com/storage/akshay-kumar-funny-expression.jpg",
            all:[]
        }
        this.change=this.change.bind(this)
        this.handle=this.handle.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes").then(response=>response.json())
        .then(data=>{
            this.setState({
                all:data.data.memes
            })
            //console.log(data.data.memes)
        })
    }
    change(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }
    handle(event){
        event.preventDefault()  //prevent the default behaviour of the submit button which is to refresh the page
        this.setState({
            randomImg:this.state.all[Math.floor(Math.random()*this.state.all.length)].url
        })
    }
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handle}>
                    <input type="text" name="topT" value={this.state.topT} placeholder="UpperText" onChange={this.change}></input>
                    <input type="text" name="bottomT" value={this.state.bottomT} placeholder="BottomText" onChange={this.change}></input>
                    <button>Generate!</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="prob!"/>
                    <h2 className="top">{this.state.topT}</h2>
                    <h2 className="bottom">{this.state.bottomT}</h2>
                </div>
            </div>   
        )
    }
}