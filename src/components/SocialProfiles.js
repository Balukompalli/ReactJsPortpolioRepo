import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

//class to stateless function style...
const SocialProfile = props => {
	
		const {link, image} = props.socailProfile;
		return (
			<span>
				<a href = {link}>
					<img src={image} alt='social-profile' style={{width:30, height:30,margin:10}}/>
				</a>
			</span>
		)
	
}

const SocialProfiles = () => (
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
	


export default SocialProfiles;