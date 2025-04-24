import { imdbDirName } from '@fatherbrennan/api/dist/imdb';

import { withTrailingSlash } from '~/utils/url';

/** App name. */
export const APP_TITLE = 'rategrid';

/** Version of the assets. */
export const ASSET_VERSION = 1744242140483;

/** Local language code. */
export const LOCAL_LANGUAGE_CODE = 'en-AU';
export const LOCAL_LANGUAGE_CODE_I18N = 'en_AU';

export const APP_URL_DOMAIN = import.meta.env.PROD ? 'fatherbrennan.github.io' : 'localhost:5173';
export const APP_URL_PROTOCOL = import.meta.env.PROD ? 'https' : 'http';
export const APP_URL_BASE = 'rategrid';
export const APP_URL = withTrailingSlash(`/${APP_URL_BASE}`);
export const APP_URL_TV_PARAM = 'tv';
export const APP_URL_TV = withTrailingSlash(`${APP_URL}${APP_URL_TV_PARAM}`);
export const APP_URL_ICONS_PARAM = 'icons';
export const APP_URL_ICONS = withTrailingSlash(`${APP_URL}${APP_URL_ICONS_PARAM}`);
export const APP_URL_ABSOLUTE = withTrailingSlash(`${APP_URL_PROTOCOL}://${APP_URL_DOMAIN}${APP_URL}`);
export const APP_URL_ICONS_ABSOLUTE = withTrailingSlash(`${APP_URL_PROTOCOL}://${APP_URL_DOMAIN}${APP_URL_ICONS}`);

export const META_OG_IMAGE_ALT = `${APP_TITLE} logo`;
export const META_OG_IMAGE_FILENAME = '1200x300.png';
export const META_OG_IMAGE_HEIGHT = 630;
export const META_OG_IMAGE_TYPE = 'image/png';
export const META_OG_IMAGE_WIDTH = 1200;
export const META_URL_OG_IMAGE = `${APP_URL_ICONS_ABSOLUTE}${META_OG_IMAGE_FILENAME}` as const;

/** In `px`. */
export const SCREEN_SMALL_WIDTH = 640;

export const TvApi = {
  [imdbDirName]: imdbDirName,
} as const;

export const TvApis = [TvApi[imdbDirName]] as const;

export const TvApiDefault = TvApi[imdbDirName];

export const OpenGraph = {
  Locale: 'locale',
  Type: 'type',
  Url: 'url',
  Title: 'title',
  Description: 'description',
  Image: 'image',
  ImageAlt: 'image:alt',
  ImageType: 'image:type',
  ImageWidth: 'image:width',
  ImageHeight: 'image:height',
} as const;

export const Route = {
  [APP_URL]: {
    href: APP_URL,
    label: APP_URL_BASE,
  },
  [APP_URL_TV]: {
    href: APP_URL_TV,
    label: APP_URL_TV_PARAM,
  },
} as const;
