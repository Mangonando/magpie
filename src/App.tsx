import React, { useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [setData, data] = React.useState<any[]>([])

  useEffect(() => {
    const fetchFakeStoreData = async () => {}
  })

  return (
    <div>
      <div>Magpie</div>
      <button className="btn btn-primary">Check it!!</button>
    </div>
  );
};

export default App;
