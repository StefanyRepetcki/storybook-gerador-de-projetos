import { addons } from '@storybook/addons';
import defaultTheme from './defaultTheme';

addons.setConfig({
    theme: defaultTheme,
    sidebarAnimations: true,
    isFullscreen: false,
    showNav: true,
    showPanel: false,
});
