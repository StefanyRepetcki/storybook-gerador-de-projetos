export default {
	title: 'COMPONENTES/Seções',
	argTypes: {
		foto: {
			name: 'Foto',
			description: 'Você pode alterar a foto para qual desejar',
			defaultValue: { summary: 'https://picsum.photos/500/500' },
			control: {
				type: 'text'
			}
		}
	}
};

export const SecaoFoto2 = (args: any, { argTypes }: any) => ({
	props: Object.keys(argTypes),
	template: `<div class="container">
  <div class="row featurette">
  <div class="col-md-5">
    <img class="featurette-image img-fluid mx-auto" :src="foto" alt="500x500" style="width: 500px; height: 500px;" data-holder-rendered="true">
  </div>
    <div class="col-md-7">
      <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
      <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
    </div>
  </div>
</div>`
});

SecaoFoto2.args = {
	foto: 'https://picsum.photos/500/500'
};
