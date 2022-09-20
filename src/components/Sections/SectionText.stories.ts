export default {
	title: 'COMPONENTES/Seções',
};

export const SecaoText = (args: any, { argTypes }: any) => ({
	props: {
		title: {
			default: () => 'Aprenda como quebrar todas as objeções e reverter cenários ao seu favor.'
		},
		description: {
			default: () => 'Aprenda como quebrar todas as objeções e reverter cenários ao seu favor.'
		},
	},
	template: `<div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
	  <div class="section-text text-center">
		<h2 class="title">{{title}}</h2>
		<p>{{description}}</p>
	  </div>
</div>`
});

SecaoText.args = {
	title: 'First featurette heading',
	description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
};
