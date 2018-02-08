const COLORS = require('./colors')
const TYPOG = require('./typography')
const BREAKPOINTS = require('./breakpoints')

module.exports = {
  // Fonts
  fontPrimary: `${TYPOG.raleway}, ${TYPOG.sansSerif}`,
  fontSecondary: `${TYPOG.openSans}, ${TYPOG.helvetica}`,

  // Text Colors
  colorTextPrimary: COLORS.platinum,
  colorTextHighlight: COLORS.carrotOrange,
  colorTextBody: COLORS.wenge,

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
  messagePrimaryColor: COLORS.sandyTaupe,

  // Input
  inputHighlight: COLORS.sandyTaupe,
  inputNormalBorderColor: COLORS.wenge,
  inputBg: COLORS.gunMetal,
  inputTextColor: COLORS.carrotOrange,
  inputPlaceholderColor: COLORS.wenge,

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

  // Breakpoints
  ...BREAKPOINTS
}
