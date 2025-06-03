// frontend/src/App.jsx
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data, error } = await supabase.from('documents').select('*');
    if (error) console.error('Supabase error:', error);
    else setData(data);
  }

  return (
    <div>
      <h4>Documents Expiry Tracker</h4>
      <ul>
        {data.map((doc) => (
          <li key={doc.id}>{doc.name} - {doc.expiry_date}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
