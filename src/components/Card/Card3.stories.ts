// @ts-ignore
import exampleOne from '../../assets/images/exampleOne.png';
//@ts-ignore
import examploTwo from '../../assets/images/exampleTwo.png';
//@ts-ignore
import examploThree from '../../assets/images/exampleThree.png';

const imgOne = {
	src: exampleOne,
	alt: 'teste'
};

const imgTwo = {
	src: examploTwo,
	alt: 'teste'
};

const imgThree = {
	src: examploThree,
	alt: 'teste'
};

export default {
	title: 'COMPONENTES/Cards/Card3'
};

export const Card3 = (args: any, { argTypes }: any) => ({
	props: {
		src: {
			default: () => imgOne.src
		},
		alt: {
			default: () => imgOne.alt
		},
    title: {
      default: () => 'Aprenda como quebrar todas as objeções e reverter cenários ao seu favor.'
    },
    description: {
      default: () => 'Aprenda como quebrar todas as objeções e reverter cenários ao seu favor.'
    },
    precoAntigo: {
      default: () => 'R$ 1.000,00'
    },
    precoAtual: {
      default: () => 'R$ 500,00'
    },
	},
	template: `
<div class="container">
  <div class="row courses">
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div class="card">
        <div class="card-image">
            <img :src="src" class="d-block w-100" :alt="alt">
        </div>
        <div class="p-4">
          <div class="card-content">
              <h4 class="title">{{title}}</h4>
              <p>{{description}}</p>
              <hr/>
          </div>
          <div class="card-action">
              <div class="price-container">
                <p class="old-price">
                    {{precoAntigo}}
                </p>
                <p class="new-price">
                    {{precoAtual}}
                </p>
                <div class="d-flex flex-row justify-content-end">
                  Saiba mais
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
});

Card3.args = {
  src: imgOne.src,
  alt: imgOne.alt,
  title: 'Fazendo acordos altamente lucrativos',
  description: 'Aprenda como quebrar todas as objeções e reverter cenários ao seu favor.',
  precoAntigo: 'R$ 100,00',
  precoAtual: 'R$ 80,00'
};
