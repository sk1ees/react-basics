// import React from 'react'

const App = () => {
  return (
    <>
      <MyName />
      <MyName />

      <h1 className="header">Hello World! {3 + 3}</h1>
      <p>This is the paragraph</p>
      {/* need to close every open tags */}
    </>
  );
};

const MyName = () => {
  return (
    <>
      <h1>This is an another component!</h1>
    </>
  );
};

export default App;
