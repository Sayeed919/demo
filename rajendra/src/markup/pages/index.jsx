import React from 'react';

import MainBannerSection from "../elements/main-banner";
import AboutSection from "../elements/about";
import WorkSection from "../elements/work";
// import AppointmentSection from "../elements/appointment";
import TestimonialSection from "../elements/testimonial";

function Index(){
	
	return(
		<>
			
			<MainBannerSection />
			
			<AboutSection />
			
			<WorkSection />
			
			{/* <AppointmentSection /> */}
			
			
			 <TestimonialSection />
			

		
			
		</>
		
	);
}

export default Index;