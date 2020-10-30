import { useContext } from 'react';
import { TextsContext, TextsScheme } from '../contexts/TextsContext';

const useTexts = (): TextsScheme => {
  const texts = useContext(TextsContext);
  return texts;
};

export default useTexts;
