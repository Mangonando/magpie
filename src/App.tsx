import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchFakeStoreData = async () => {
      try {
        fetch('https://fakestoreapi.com/products/')
          .then((res) => res.json())
          .then((json) => {
            setData(json);
            console.log(json);
          });
      } catch (error) {
        console.log('Error fetching API data', error);
      }
    };
    fetchFakeStoreData();
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        {data.map((product: { id: number; title: string; image: string }) => (
          <div key={product.id}>
            <div>{product.title}</div>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
