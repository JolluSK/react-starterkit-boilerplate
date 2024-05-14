import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';

import { Button, LoadingBarComponent } from '@/components/ui';
import { NotificationComponent } from '@/components/ui/Notification';
import { queryClient } from '@/lib/queryClient';



const ErrorFallback = () => (
  <div className="text-red-500 w-screen h-screen flex flex-col justify-center items-center" role="alert">
    <h2 className="text-lg font-semibold">Ooops, something went wrong :(</h2>
    <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
      Refresh
    </Button>
  </div>
);

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    // <Suspense fallback={<LoadingBarComponent ref={ref} startLoading={true} />}>
    <Suspense fallback={<LoadingBarComponent />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <NotificationComponent />
          {/* <AuthProvider> */}
          <Router>
            {children}
          </Router>
          {/* </AuthProvider> */}
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};

export default AppProvider;
