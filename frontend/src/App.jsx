// frontend/src/App.jsx
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) setUser(session.user);
    });

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div>
      <h1>Welcome, {user.email}!</h1>
      {/* Your main app content here */}
      <button onClick={() => supabase.auth.signOut()}>Logout</button>
    </div>
  );
}

export default App;
