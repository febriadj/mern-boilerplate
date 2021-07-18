import React, { useEffect, useState } from 'react';

export default function App() {
  const [state, setState] = useState({});

  const requestData = async () => {
    try {
      const response = await (await fetch('/api/data')).json();

      setState((prev) => ({
        ...prev,
        header: response.data.header,
        message: response.data.message,
        link: response.data.link,
      }));
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    document.title = 'Testing Boilerplate';
    requestData();
  });

  return (
    <div className="app">
      <h2 className="header">{ state.header }</h2>
      <span>
        { state.message }
        <a href={ state.link } target="blank"> here</a>
      </span>
    </div>
  );
}
