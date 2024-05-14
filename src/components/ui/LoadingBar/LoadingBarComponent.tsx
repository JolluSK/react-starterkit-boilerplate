import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

const LoadingBarComponent = forwardRef((_, ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start the loading process when the component mounts
    setProgress(10); // Start with some initial progress
    let interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 5;  // Increment the progress slower to wait for component loading
      });
    }, 100);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  // Automatically complete the loading when React indicates that the component has mounted
  useEffect(() => {
    setProgress(100);
  }, []);

  useImperativeHandle(ref, () => ({
    complete: () => setProgress(100)
  }));

  return <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />;
});

export { LoadingBarComponent };
