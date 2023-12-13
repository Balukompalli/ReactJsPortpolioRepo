import React, {Component} from "react";
import SOCIAL_PROFILES from "./data/socialProfiles";

class SocialProfile extends Component {
	render(){
		const {link, image} = this.props.socailProfile;
		return (
			<span>
				<a href = {link}>
					<img src={image} alt='social-profile' style={{width:30, height:30,margin:10}}/>
				</a>
			</span>
		)
	}
}

class SocialProfiles extends Component {
	render() {
		
		return (
		<div>
			<h2> Connect with me thru below links !! </h2>
			
			<div> 
			{
				SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
					return <SocialProfile key={SOCIAL_PROFILE.id} socailProfile={SOCIAL_PROFILE}/>
				})
				
			}
				
			</div>
		</div>	
		)
	}
}

export default SocialProfiles;