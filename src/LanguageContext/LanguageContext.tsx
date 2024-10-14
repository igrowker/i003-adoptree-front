import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define los tipos para el contexto
interface LanguageContextType {
  language: 'es' | 'en';
  setLanguage: React.Dispatch<React.SetStateAction<'es' | 'en'>>;
}

// Crea el contexto con un valor por defecto
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Componente proveedor para envolver tu aplicación
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<'es' | 'en'>('es'); // Establece el valor por defecto aquí

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar el contexto fácilmente
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
