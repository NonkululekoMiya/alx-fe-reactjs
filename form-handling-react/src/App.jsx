import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormiForm';

function App() {
  return (
    <div className="App">
      <h1>User Registration</h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;