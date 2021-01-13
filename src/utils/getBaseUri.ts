import config from '../config/config';
import isDev from './isDev';

const getBaseUri = (): string => {
  return isDev() ? config.baseURI.dev : config.baseURI.production;
};

export default getBaseUri;
