// @ts-ignore
import exampleOne from '../../assets/images/exampleOne.png';

const imgOne = {
	src: exampleOne,
	alt: 'teste'
};

export default {
	title: 'COMPONENTES/Cards/Card2'
};

export const Card2 = (args: any, { argTypes }: any) => ({
	props: {
		src: {
			default: () => imgOne.src
		},
		alt: {
			default: () => imgOne.alt
		},
    title: {
      default: () => 'Card title'
    },
    description: {
      default: () => 'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
	},
	template: `
<div class="container">
  <div class="row row-card justify-content-between mt-3">
    <div class="card-custom p-0">
    <img :src="src" class="d-block w-100" :alt="alt">
      <div class="card-body d-flex flex-column justify-content-end">
          <h3 class="m-0">{{title}}</h3>
          <p class="m-0 card-text">{{description}}</p>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <button type="button" class="btn btn-warning px-2">Ver mais</button>
          </div>
      </div>
    </div>
  </div>
</div>`
});

Card2.args = {
  src: imgOne.src,
  alt: imgOne.alt,
  title: 'Card title',
  description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
};
