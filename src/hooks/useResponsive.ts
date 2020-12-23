import { useMediaQuery } from 'react-responsive';

interface Responsiveness {
  isTabletOrMobile: boolean;
}

const useResponsive = (): Responsiveness => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return {
    isTabletOrMobile,
  };
};

export default useResponsive;
