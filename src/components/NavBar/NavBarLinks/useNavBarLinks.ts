import useTexts from '../../../hooks/useTexts';

export interface LinkDetails {
  displayText: string;
  route: string;
}

const useNavBarLinks = (): LinkDetails[] => {
  const texts = useTexts();

  const routes: LinkDetails[] = [
    { displayText: texts.navBarLinksHome, route: '/' },
    { displayText: texts.navBarLinksForCompanies, route: '/company' },
    { displayText: texts.navBarLinksProducts, route: '/products' },
  ];

  return routes;
};

export default useNavBarLinks;
