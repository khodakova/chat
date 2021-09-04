import React from 'react';
import './Auth.scss'
import {Route} from 'react-router-dom';
import {LoginForm, RegistrationForm} from "../../modules";

const Auth = () => {
  return (
    <section className='auth'>
      <div className='auth__content'>
        <Route exact path={['/login']} component={LoginForm}/>
        <Route exact path="/registration" component={RegistrationForm} />
        <Route path={['/atata']} component={LoginForm}/>
      </div>
    </section>
  )
};

export default Auth;
