import React,{Component} from "react";
import PROJECTS from "./data/projects";

class Project extends Component {
	render() {
		console.log('this.props', this.props);
		return (
			<div>{this.props.project.title}</div>
		)
	}
}

class Projects extends Component {
	render(){
		return(
			<div>
			<h2>Highlighted Projects</h2>
				<div>
				{
					PROJECTS.map(PROJECT => {
						return (
						/*<div key={PROJECT.id}>{PROJECT.title}</div>*/	
						<Project key={PROJECT.id} project={PROJECT}/>
						
						);
						
					})
				}
				</div>
			</div>
		)
	}
	
}
	
export default Projects; 