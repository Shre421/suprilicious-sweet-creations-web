
// Simple admin authentication utility
const ADMIN_PASSWORD_KEY = 'admin_password_hash';

// Function to check if admin is logged in
export const isAdminAuthenticated = (): boolean => {
  return localStorage.getItem(ADMIN_PASSWORD_KEY) === hashPassword(import.meta.env.VITE_ADMIN_PASSWORD || 'admin123');
};

// Function to log in as admin
export const adminLogin = (password: string): boolean => {
  const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
  
  if (password === correctPassword) {
    localStorage.setItem(ADMIN_PASSWORD_KEY, hashPassword(correctPassword));
    return true;
  }
  return false;
};

// Function to log out admin
export const adminLogout = (): void => {
  localStorage.removeItem(ADMIN_PASSWORD_KEY);
};

// Simple hash function (not for production, just to avoid storing plain text)
const hashPassword = (password: string): string => {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(16);
};
