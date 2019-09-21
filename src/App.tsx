import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.component';
import Hero from './components/hero/Hero.component';
import ApplicationsOpen from './components/ApplicationsOpen/ApplicationsOpen.component';
import CountdownWrapper from './components/Countdown/Countdown.component';
import ForYou from './components/WeProvide/ForYou.component';
import How from './components/How/How.component';
import AppWrapper from './components/AppWrapper/AppWrapper.component';
import ProductWrapper from './components/ProductWrapper/ProductWrapper.component';
import Terms from './components/Terms/Terms.component';
import Timeline from './components/Timeline/Timeline.component';
import CallToAction from './components/CallToAction/CallToAction.component';
import Iframe from 'react-iframe';
import CloseFormNavBar from './components/CloseFormNavBar/CloseFormNavBar.component';

const App: React.FC = () => {
  const [formVisible, showForm] = useState({
    formVisible: false,
  })

  if (formVisible.formVisible === true) {
    return (
      <div className="App">
        <CloseFormNavBar
          onClose={() => showForm({formVisible: false})}/>
          <Iframe
            styles={{zIndex: 1}}
            url="https://michaljackowski.typeform.com/to/iwdfAb"
            width="100%"
            height={`${window.innerHeight - 100}px`}/>
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar
        handleSubmit={() => showForm({formVisible: true})}/>
      <AppWrapper>
        <ProductWrapper>
          <Hero
            handleSubmit={() => showForm({formVisible: true})}/>
          <CountdownWrapper/>
          <ApplicationsOpen/>
        </ProductWrapper>
      </AppWrapper>
      <How/>
      <ForYou/>
      <AppWrapper>
        <Terms/>
      </AppWrapper>
      <Timeline/>
      <CallToAction
        handleSubmit={() => showForm({formVisible: true})}/>
    </div>
  );
}

export default App;
