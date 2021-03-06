const COLORS = require('./colors')
const TYPOG = require('./typography')
const MEDIA_QUERIES = require('./mediaQueries')
const BREAK_POINTS = require('./breakpoints')
const { rgba } = require('polished')

module.exports = {
  // Fonts
  fontPrimary: `${TYPOG.raleway}, ${TYPOG.sansSerif}`,
  fontSecondary: `${TYPOG.openSans}, ${TYPOG.helvetica}`,

  // Text Colors
  colorTextPrimary: COLORS.platinum,
  colorTextHighlight: COLORS.carrotOrange,
  colorTextBody: COLORS.wenge,

  // Progress
  primaryProgressColor: COLORS.carrotOrange,

  // CTA
  ctaPrimary: COLORS.wenge,
  ctaHighlight: COLORS.carrotOrange,

  // Background
  bgPrimary: COLORS.darkGunMetal,
  bgSecondary: COLORS.gunMetal,

  // Status
  inactiveStatusColor: COLORS.wenge,
  activeStatusColor: COLORS.parisGreen,

  // Messages
  messageWarningColor: COLORS.carrotOrange,
  messageWarningBgColor: rgba(COLORS.carrotOrange, 0.2),
  messageErrorColor: COLORS.white,
  messageErrorBgColor: COLORS.jellyBean,

  // Input
  inputHighlight: COLORS.sandyTaupe,
  inputNormalBorderColor: COLORS.wenge,
  inputBg: COLORS.gunMetal,
  inputTextColor: COLORS.white,
  inputPlaceholderColor: COLORS.wenge,
  inputSuccessBorderColor: COLORS.parisGreen,

  // Form components
  formBorderRadius: '2px',

  // Button
  primaryButtonBg: COLORS.carrotOrange,

  // Overlay
  overlayPrimaryBg: COLORS.black,

  // Modal
  modalZIndex: 9999,

  // Header
  headerHeight: '60px',
  headerHeightPlain: 60,
  headerBgColor: COLORS.darkGunMetal,

  // Logo
  logoSmWidth: '40px',
  logoSmHeight: '40px',

  // Cards
  primaryCardBorderColor: COLORS.sandyTaupe,
  primaryCardBg: COLORS.darkGunMetal,

  // Drop Zones
  dropZoneBorderColor: COLORS.carrotOrange,
  dropZoneHoverBgColor: rgba(COLORS.carrotOrange, 0.2),
  dropZoneSuccessBorderColor: COLORS.parisGreen,
  dropZoneSuccessBgColor: rgba(COLORS.parisGreen, 0.2),
  dropZoneErrorBorderColor: COLORS.tractorRed,
  dropZoneErrorBgColor: rgba(COLORS.tractorRed, 0.2),

  // font size
  fontSizeTitle: '45px',
  fontSizeMdTitle: '28px',
  fontSizeSmTitle: '24px',
  fontSizeSubTitle: '20px',
  fontSizeMdSubTitle: '18px',
  fontSizeSmSubTitle: '16px',
  fontSizeText: '14px',
  fontSizeMdText: '12px',
  fontSizeSmText: '10px',

  // Loader
  loaderPrimaryBg: COLORS.white,

  // Media Queries
  ...MEDIA_QUERIES,

  // Breakpoints
  ...BREAK_POINTS
}
