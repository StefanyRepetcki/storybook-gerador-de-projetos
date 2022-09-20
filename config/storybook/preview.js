import '../../src/assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { configure } from '@storybook/vue';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import bootstrap from 'bootstrap';

new Vue({
	BootstrapVue,
	render: h => h(App)
}).$mount('#app');

configure(require.context('../../src/components', true, /\.stories\.js$/), module);

function loadStories() {
	require.keys().forEach(filename => require(filename));
}

configure(loadStories, module);

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: { storySort: { order: ['DOCUMENTAÇÃO', 'DESIGN SYSTEM', 'COMPONENTES'], method: 'alphabetical' } }
};
