import { useEffect } from 'react';

function useEscapeKey(callback) {
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.keyCode === 27) {
        callback();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [callback]);
}

export default useEscapeKey;
