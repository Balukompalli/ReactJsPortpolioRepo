import React, {Component} from 'react';
const TITLES = [
	'Software Engineer',
	'Muzic lover',
	'Enthusiastic learner',
	'Adventure seeker',
	'Janasainik'
];


class Title extends Component {
	state = {titleIndex: 0 ,fadeIn: true};
	
	componentDidMount (){
		this.timeout = setTimeout(()=> this.setState({fadeIn: false}),2000);
		console.log('Title component mounted');
		this.animateTitles();
	}
	
	animateTitles = () => {
	this.titleInterval = setInterval(()=>{
			const titleIndex =  (this.state.titleIndex + 1) % TITLES.length;
			this.setState({titleIndex, fadeIn: true});
			this.timeout = setTimeout(()=> this.setState({fadeIn: false}),2000);
		},4000);
		console.log('this.titleInterval : ',this.titleInterval);
	}
	
	componentWillUnmount() {
		console.log('title Component unmounted');		
		//clearInterval(this.titleInterval);
		clearTimeout(this.timeout);
	}
	
	render() {
		const {fadeIn, titleIndex } = this.state;
		
		const title =  TITLES[titleIndex];
		return (
			<p className={fadeIn ? 'title-fade-in':'title-fade-out' }>I am {title}</p>
		)
	}
}

export default Title;