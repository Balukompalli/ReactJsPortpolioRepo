import React,{Component} from "react";
import PROJECTS from "../data/projects";

/**
 * class style which extends a component
 */
/*class Project extends Component {
	render() {
		console.log('this.props', this.props);
		
		const {title, image, description, link } = this.props.project;
		
		return (
			<div style={{display:'inline-block', width:360, height:30, margin:10 }}>
				<h3>{title}</h3>
				<img src={image} alt='profile' style={{width:150, height:150}}/>
				<p>{description}</p>
				<a href={link}>{link}</a>
			</div>
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
							
						<Project key={PROJECT.id} project={PROJECT}/>
						
						);
						
					})
				}
				</div>
			</div>
		)
	}
	
}

*/

/**
 * stateless function style:: 
 * above class style is converting to stateless function style 
 */
const Project = props => {

		const {title, image, description, link } = props.project;
		return (
			<div style={{display:'inline-block', width:360, height:30, margin:10 }}>
				<h3>{title}</h3>
				<img src={image} alt='profile' style={{width:150, height:150}}/>
				<p>{description}</p>
				<a href={link}>{link}</a>
			</div>
		)
}

const Projects = () =>  (
	//removing return and curly braces and use () instead of return is called inline body..
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
	
export default Projects; 