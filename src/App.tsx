import React, { FC } from 'react';
import './App.css';
import { useNotify } from '@/utils/notify';

// import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes/index';

const App: FC = () => {
  const notify = useNotify();

  const handleSuccess = () => {
    notify('success', 'Success!', 'Your operation was successful.');
  };

  return (
    <AppRoutes />
  );
};

export default App;
