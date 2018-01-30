const helmet = require('helmet');
const { config } = require('./importer');

const dev = process.env.REACT_APP_ENV === 'development';
const googleAnalyticsEnabled = !!process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
const sentryClientEnabled = !!process.env.REACT_APP_PUBLIC_SENTRY_DSN;

/**
 * Middleware for creating a Content Security Policy
 *
 * @param {String} reportUri URL where the browser will POST the
 * policy violation reports
 *
 * @param {Boolean} enforceSsl When SSL is enforced, all mixed content
 * is blocked/reported by the policy
 *
 * @param {Boolean} reportOnly In the report mode, requests are only
 * reported to the report URL instead of blocked
 */
module.exports = (reportUri, enforceSsl, reportOnly) => {
  const self = "'self'";
  const inline = "'unsafe-inline'";
  const sharetribeApi = config.sdk.baseUrl;
  const sharetribeAssets = 'https://assets-sharetribecom.sharetribe.com/';
  const imgix = '*.imgix.net/';
  const loremPixel = 'https://lorempixel.com/';
  const placeholder = 'https://via.placeholder.com/';
  const googleAnalytics = 'https://www.google-analytics.com/';
  const googleMaps = 'https://maps.googleapis.com/';
  const googleStaticCsi = 'https://csi.gstatic.com/';
  const googleStaticFonts = 'https://fonts.gstatic.com/';
  const googleStaticMaps = 'https://maps.gstatic.com/';
  const googleFonts = 'https://fonts.googleapis.com/';
  const stripeJs = 'https://js.stripe.com/';
  const stripeQ = 'https://q.stripe.com/';
  const sentryApi = 'https://sentry.io/api/';

  const scriptSrc = [self, inline, googleMaps, stripeJs];

  const styleSrc = [self, inline, googleFonts];

  const imgSrc = [
    self,
    'data:',
    imgix,
    loremPixel,
    placeholder,
    stripeQ,
    googleMaps,
    googleStaticCsi,
    googleStaticMaps,
  ];

  const connectSrc = [self, sharetribeApi, googleMaps];

  const fontSrc = [self, sharetribeAssets, googleStaticFonts];

  const frameSrc = [self, stripeJs];

  if (googleAnalyticsEnabled) {
    // Only whitelist Google Analytics URLs when the analytics is
    // enabled.
    scriptSrc.push(googleAnalytics);
    imgSrc.push(googleAnalytics);
  }
  if (sentryClientEnabled) {
    connectSrc.push(sentryApi);
  }
  if (dev) {
    // The default Core docker-compose setup server images from this
    // URL locally.
    imgSrc.push('*.localhost:8000');
  }

  const directives = {
    scriptSrc,
    styleSrc,
    imgSrc,
    connectSrc,
    fontSrc,
    frameSrc,
    formAction: [self],
    defaultSrc: [self],
    baseUri: [self],
    reportUri,
  };

  if (enforceSsl) {
    directives.blockAllMixedContent = true;
  }

  return helmet.contentSecurityPolicy({
    directives,
    reportOnly,
  });
};