import React from 'react';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import ContainerCheckout from './layouts/ContainerCheckout';

function App() {
  const [step, setStep] = React.useState(0);
  const [email, setEmail] = React.useState({ email: '', notifications: false });
  return (
    <div className="wrapper w-100 d-block">
      <ContainerCheckout>
        {step === 0 && <Checkout stepState={[step, setStep]} emailState={[email, setEmail]} />}
        {step === 1 && <Payment stepState={[step, setStep]} />}
      </ContainerCheckout>
    </div>
  );
}

export default App;
