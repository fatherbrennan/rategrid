import { imdbDirName } from '@fatherbrennan/api/dist/imdb';

/** App name. */
export const APP_TITLE = 'rategrid';

/** Version of the assets. */
export const ASSET_VERSION = 1744242140483;

/** Local language code. */
export const LOCAL_LANGUAGE_CODE = 'en-AU';
export const LOCAL_LANGUAGE_CODE_I18N = 'en_AU';

export const META_OG_IMAGE_ALT = `${APP_TITLE} logo`;
export const META_OG_IMAGE_FILENAME = '1200x300.png';
export const META_OG_IMAGE_HEIGHT = 630;
export const META_OG_IMAGE_TYPE = 'image/png';
export const META_OG_IMAGE_WIDTH = 1200;
export const META_URL_PATHNAME = 'rategrid';
export const META_URL_DOMAIN = import.meta.env.PROD ? 'fatherbrennan.github.io' : 'localhost:5173';
export const META_URL_PROTOCOL = import.meta.env.PROD ? 'https' : 'http';
export const META_URL_ICONS_PATHNAME = 'icons';
export const META_URL = `${META_URL_PROTOCOL}://${META_URL_DOMAIN}/${META_URL_PATHNAME}/` as const;
export const META_URL_OG_IMAGE = `${META_URL}icons/${META_OG_IMAGE_FILENAME}` as const;
export const META_URL_TV_PATHNAME = 'tv';
export const META_URL_TV = `${META_URL}${META_URL_TV_PATHNAME}/` as const;

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
