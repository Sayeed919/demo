import React, { Component } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Header from "./layout/header";
import Footer from "./layout/footer";
import Index from './pages/index';
import AboutUs from './pages/about-us';
import FormLogin from './pages/form-login';
import FormRegister from './pages/form-register';
import FormForgetPassword from './pages/form-forget-password';
import Error from './pages/error-404';
import VideoCall from './pages/videocall';
import Chat from './pages/chat';
import MyAppointment from './pages/myappointment';
import Prescription from './pages/prescription';
import MyProfile from './pages/myprofile';
import FamMember from './pages/fammember';
import MyEHR from './pages/ehr';
import BookAppointment from './pages/bookappointment';
import Token from './pages/token';
import AppointmentUser from './pages/appointmentuser';
import useRequireAuth from './../hooks/useRequireAuth';
import SignOut from './../hooks/useSignOut'; // Your sign-out component

class Markup extends Component {
  state = {
    doctors: [
      { id: 1, name: "Dr. Bennett", speciality: "Dermatologist", experience: 5, ratings: 4 },
      { id: 2, name: "Dr. Davis Engel", speciality: "Dentist", experience: 3, ratings: 3 },
      { id: 3, name: "Dr. Mark", speciality: "Pediatrics", experience: 8, ratings: 5 }
    ]
  };

  render() {
    return (
      <Routes>
        <Route path="/" element={<ThemeLayout />}>
          <Route index element={<Index />} />
          <Route path="home" element={<Index />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route
            path="myappointment"
            element={
              <PrivateRoute>
                <MyAppointment />
              </PrivateRoute>
            }
          />
          <Route
            path="myprofile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="fammember"
            element={
              <PrivateRoute>
                <FamMember />
              </PrivateRoute>
            }
          />
          <Route
            path="ehr"
            element={
              <PrivateRoute>
                <MyEHR />
              </PrivateRoute>
            }
          />
          <Route
            path="videocall"
            element={
              <PrivateRoute>
                <VideoCall />
              </PrivateRoute>
            }
          />
          <Route
            path="chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            path="bookappointment"
            element={
              <PrivateRoute>
                <BookAppointment />
              </PrivateRoute>
            }
          />
          <Route
            path="token"
            element={
              <PrivateRoute>
                <Token />
              </PrivateRoute>
            }
          />
          <Route
            path="appointmentuser"
            element={
              <PrivateRoute>
                <AppointmentUser />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="form-login" element={<PublicRoute><FormLogin /></PublicRoute>} />
        <Route path="form-register" element={<PublicRoute><FormRegister /></PublicRoute>} />
        <Route path="form-forget-password" element={<PublicRoute><FormForgetPassword /></PublicRoute>} />
        <Route path="signout" element={<SignOut />} />
      </Routes>
    );
  }
}

function PrivateRoute({ children }) {
  const auth = useRequireAuth();
  if (auth === undefined) {
    return <div>Loading...</div>;
  }
  return auth ? children : <Navigate to="/form-login" />;
}

function PublicRoute({ children }) {
  const auth = useRequireAuth();
  if (auth === undefined) {
    return <div>Loading...</div>;
  }
  return !auth ? children : <Navigate to="/home" />;
}

function ThemeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Markup;
