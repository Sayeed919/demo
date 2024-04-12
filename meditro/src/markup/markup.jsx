import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// Layout
import Header from "./layout/header";
import Footer from "./layout/footer";

// All Pages Router
// import Home from '.pages-doctor/home';
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import ServiceDetail2 from './pages/service-detail2';
import ServiceDetail3 from './pages/service-detail3';
import ServiceDetail4 from './pages/service-detail4';
import ServiceDetail5 from './pages/service-detail5';
import ServiceDetail6 from './pages/service-detail6';
// import DoctorComponent from './pages/doctor'
import ViewProfile from './pages/view_profile';
import Dermatologist from './pages/dermatologist';
import Dentist from './pages/dentist';
import Gynecologist from './pages/gynecologist';
import HomoeopathComponent from './pages/homoeopath';
import BookVisit from './pages/book_visit';
import UserProfile from './pages/userprofile';
import FormLogin from './pages/form-login';
import FormRegister from './pages/form-register';
import FormForgetPassword from './pages/form-forget-password';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';
import BlogGrid from './pages/blog-grid';
import BlogDetails from './pages/blog-details';
import Error from './pages/error-404';
import DoctorComponent from './pages/doctor';
import Homoeopath from './pages/homoeopath';
import GeneralPhysician from './pages/general_physician';
import Ayurveda from './pages/ayurveda';
import VideoCall from './pages/videocall';
import Chat from './pages/chat';
import Profile from './pages/doc_profile';

import MyAppointment from './pages/myappointment';
import Prescription from './pages/prescription';
import MyProfile from './pages/myprofile';





class Markup extends Component {
	// Define the doctors variable
	state = {
	  doctors: [
		{ id: 1, name: "Dr. Bennett", speciality: "Dermatologist", experience: 5, ratings: 4 },
		{ id: 2, name: "Dr. Davis Engel", speciality: "Dentist", experience: 3, ratings: 3 },
		{ id: 3, name: "Dr. Mark", speciality: "Pediatrics", experience: 8, ratings: 5 }
	  ]
	};
  
	render() {
		return(
			<>	
			
				{/* {<BrowserRouter basename={'/react/'}> */}
				<BrowserRouter>
					
					<Routes>
						
						<Route element={<ThemeLayout />}>
							<Route path='/' element={<Index />} />
							<Route path='/about-us' element={<AboutUs />} />
							<Route path='/team' element={<Team />} />
							<Route path='/services' element={<Services />} />
							<Route path='/service-detail' element={<ServiceDetail />} />
							<Route path='/service-detail2' element={<ServiceDetail2 />} />
							<Route path='/service-detail3' element={<ServiceDetail3 />} />
							<Route path='/service-detail4' element={<ServiceDetail4 />} />
							<Route path='/service-detail5' element={<ServiceDetail5 />} />
							<Route path='/service-detail6' element={<ServiceDetail6 />} />
							{/* <Route path='/doctor' element={<Doctor />} /> */}
							{/* <Route path='/view_profile' element={<ViewProfile/>}/>
							<Route path='/doctor' element={<DoctorComponent/>} /> */}
              				{/* <Route path='/view_profile/:id' element={<ViewProfile />} />
              				<Route path='/book_visit/:id' element={<BookVisit />} /> */}

							<Route path='/doctor' element={<DoctorComponent />} />
             				<Route path='/view_profile/:id' element={<ViewProfile />} />
              				<Route path='/book_visit/:id' element={<BookVisit doctors={this.state.doctors} />} />
							
							<Route path='/dermatologist' element={<Dermatologist/>}/>
							<Route path='/dentist' element={<Dentist/>}/>
							<Route path='/gynecologist' element={<Gynecologist/>}/>
							<Route path='/homoeopath' element={<Homoeopath/>}/>
							<Route path='/ayurveda' element={<Ayurveda/>}/>
							<Route path='/general_physician' element={<GeneralPhysician/>}/>
							<Route path='/myappointment' element={<MyAppointment/>}/>
							<Route path='/prescription' element={<Prescription/>}/>
							<Route path='/myprofile' element={<MyProfile/>}/>


							{/* <Route path='/book_visit' element={<BookVisit/>}/> */}
							<Route path='/userprofile' element={<UserProfile/>}/>
							<Route path='/faq' element={<Faq />} />
							<Route path='/contact-us' element={<ContactUs />} />
							<Route path='/booking' element={<Booking />} />
							<Route path='/' element={<Booking />} />

							<Route path='/blog-grid' element={<BlogGrid />} />
							<Route path='/blog-details' element={<BlogDetails />} />
							<Route path='/videocall' element={<VideoCall/>} />
							<Route path='/chat' element={<Chat/>} />
							<Route path='/doc_profile' element={<Profile/>} />


							<Route path="*" element={<Error />} />
						</Route>
						
						<Route path="/form-login" element={<FormLogin />} />
						<Route path="/form-register" element={<FormRegister />} />
						<Route path='/form-forget-password' element={<FormForgetPassword />} />
						
					</Routes>
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
				
			</>
		);
	}
}
function ThemeLayout(){
	return(
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
export default Markup;