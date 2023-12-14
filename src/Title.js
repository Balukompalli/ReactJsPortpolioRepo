import React, {Component} from 'react';
const TITLES = [
	'Software Engineer',
	'Muzic lover',
	'Enthusiastic learner',
	'Adventure seeker',
	'Janasainik'
];


class Title extends Component {
	state = {titleIndex: 0};
	
	componentDidMount (){
		console.log('Title component mounted');
		this.animateTitles();
	}
	
	animateTitles = () => {
	this.titleInterval = setInterval(()=>{
			const titleIndex =  (this.state.titleIndex + 1) % TITLES.length;
			this.setState({titleIndex});
		},4000);
		console.log('this.titleInterval : ',this.titleInterval);
	}
	
	componentWillUnmount() {
		console.log('title Component unmounted');		
		clearInterval(this.titleInterval);
	}
	
	render() {
		const title =  TITLES[this.state.titleIndex];
		return (
			<p>I am {title}</p>
		)
	}
}

export default Title;