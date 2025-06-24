import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-HYB3CB2PRT', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default usePageView;
