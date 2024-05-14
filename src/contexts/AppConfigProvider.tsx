// src/config/AppConfigProvider.tsx
import React, { FC, ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import themeConfig from '@/styles/themeConfig';

// import 'antd/dist/antd.css'; 

interface AppConfigProviderProps {
  children: ReactNode;
}

const AppConfigProvider: FC<AppConfigProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeConfig.primaryColor,
          borderRadius: themeConfig.borderRadius,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AppConfigProvider;
