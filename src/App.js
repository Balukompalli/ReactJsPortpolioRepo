import { render } from "@testing-library/react";
import React, { Component } from "react";

class App extends Component{
	state = {dispayBio: false};
	
	/*constructor() {
		super();
		this.state = { displayBio: false};
		console.log('Component this' , this);
		this.toggleDisplayBio= this.toggleDisplayBio.bind(this);
	}*/
	
	toggleDisplayBio= ()=> {
		this.setState({displayBio : !this.state.displayBio})
		//this.state.displayBio = !this.state.displayBio;
	}
	
	
	render() {
				
		return (
			<div>
				<h1>Hello !!</h1>
				<p>My Name is Prasad. I am Janasanik</p>
				<p>I am always looking forward to work for JanaSena Victory in politics.</p>
				{
					this.state.displayBio ? ( <div>
					<p>I live in hyderabad and learn the tech stack..</p>
					<p>My favorite language is Javascript and react is too good to learn...</p>
					<p>I love muzic and cinema!!</p>
					
					<button onClick={this.toggleDisplayBio}>Show Less</button>
				</div> 
				) : (
					<div>
						<button onClick={this.toggleDisplayBio}> Read More ..</button>
					 </div>
					)
				}
			</div>
		);
	}	
}

export default App;

