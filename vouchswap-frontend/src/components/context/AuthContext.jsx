import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check for an authenticated session when the component mounts
  useEffect(() => {
    // Get the current session from Supabase
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        setUser(session.user);
      }
    };

    // Call getSession on mount
    getSession();

    // Listen for auth changes (login/logout) and update the user accordingly
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    // Cleanup subscription on unmount
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;