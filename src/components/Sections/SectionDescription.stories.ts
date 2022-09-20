export default {
	title: 'COMPONENTES/Seções',
  argTypes: {
    foto: {
      name: 'Foto',
      description: 'Você pode alterar a foto para qual desejar',
      defaultValue: { summary: 'https://picsum.photos/500/500' },
      control: {
        type: 'text',
      },
    },
    foto2: {
      name: 'Foto 2',
      description: 'Você pode alterar a foto para qual desejar',
      defaultValue: { summary: 'https://picsum.photos/500/500' },
      control: {
        type: 'text',
      },
    },
    foto3: {
      name: 'Foto 3',
      description: 'Você pode alterar a foto para qual desejar',
      defaultValue: { summary: 'https://picsum.photos/500/500' },
      control: {
        type: 'text',
      },
    },
  },
};

export const SecaoDescricao = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
	template: `<div class="container">
  <div class="row">
    <div class="col-lg-4 text-center center">
      <img class="rounded-circle" :src="foto" width="140" height="140" alt="Generic placeholder image">
      <h2>Heading</h2>
      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
      <p><a class="btn btn-primary" href="#" role="button">View details »</a></p>
    </div>
    <div class="col-lg-4 text-center center">
      <img class="rounded-circle" :src="foto2" alt="Generic placeholder image" width="140" height="140">
      <h2>Heading</h2>
      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
      <p><a class="btn btn-primary" href="#" role="button">View details »</a></p>
    </div>
    <div class="col-lg-4 text-center center">
      <img class="rounded-circle" :src="foto3" alt="Generic placeholder image" width="140" height="140">
      <h2>Heading</h2>
      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
      <p><a class="btn btn-primary" href="#" role="button">View details »</a></p>
    </div>
  </div>
</div>`,
});

SecaoDescricao.args = {
  foto: 'https://picsum.photos/500/500',
  foto2: 'https://picsum.photos/500/500',
  foto3: 'https://picsum.photos/500/500',
};
