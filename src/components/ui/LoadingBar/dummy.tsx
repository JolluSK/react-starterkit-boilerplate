import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

interface LoadingBarComponentProps {
  startLoading: boolean; // Control the start of the loading bar
}

const LoadingBarComponent = forwardRef<any, LoadingBarComponentProps>(({ startLoading }, ref) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (startLoading) {
      setProgress(30); // Initialize some progress when loading starts
      timer = setInterval(() => {
        setProgress(prevProgress => {
          const nextProgress = prevProgress + 10;
          if (nextProgress >= 100) {
            clearInterval(timer);
            return 100; // Cap progress at 100 and stop the timer
          }
          return nextProgress;
        });
      }, 100);
    } else {
      setProgress(0); // Reset progress when not loading
    }
    return () => clearInterval(timer); // Cleanup interval on component unmount or when startLoading changes
  }, [startLoading]);

  useImperativeHandle(ref, () => ({
    complete: () => setProgress(100) // Expose a method to complete the loading externally
  }));

  return <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />;
});

export { LoadingBarComponent };