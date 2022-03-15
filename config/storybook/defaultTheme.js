import imgLogo from '../../src/assets/images/logo.png';
import { create } from '@storybook/theming';

const backgroundlinear = 'linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486);';
const colorPrimary = '#792C8D';
const colorSecondary = '#250D31';

export default create({
	base: 'light',

	colorPrimary: colorPrimary,
	colorSecondary: colorSecondary,
	// UI
	appBg: backgroundlinear,
	appContentBg: colorSecondary,
	appBorderColor: colorSecondary,
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: 'white',
	textInverseColor: 'rgba(255,255,255,0.9)',

	// Toolbar default and active colors
	barTextColor: 'white',
	barSelectedColor: 'white',
	barBg: colorPrimary,

	// Form colors
	inputBg: 'white',
	inputBorder: colorSecondary,
	inputTextColor: 'black',
	inputBorderRadius: 4,

	brandTitle: 'Desenvolvimento de Software',
	brandUrl: '#',
	brandImage: `/${imgLogo}`
});
