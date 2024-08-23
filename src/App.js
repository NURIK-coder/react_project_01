import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [output, setOutput] = useState('');
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 10.99, count: 5 },
    { name: 'Product 2', price: 5.99, count: 3 },
    { name: 'Product 3', price: 7.99, count: 2 },
  ]);
  const [currentTime, setCurrentTime] = useState('');
  const [dayInfo, setDayInfo] = useState('');

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    if (day % 2 === 0) {
      setDayInfo(`${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`);
    } else {
      setDayInfo(`${date.toLocaleString('default', { weekday: 'long' })} ${date.getDate()}`);
    }
  }, []);
  const submit = (event) => {
    event.preventDefault();
    setOutput(`Hello, ${name}! You are ${age} years old. :)`);
    setName('');
    setAge('');
  };

  
  return (
    <div className='App'>
      <div>
        <form onSubmit={submit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
          <button type="submit">Submit</button>
        </form>
        <div id="output">{output}</div>
        <div id="products">
          {products.map((product) => (
            <div key={product.name} className="product">
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Count: {product.count}</p>
            </div>
          ))}
        </div>

        <div id="time">{currentTime}</div>
        <div id="day-info">{dayInfo}</div>
      </div>
    </div>
  );
}

export default App;
