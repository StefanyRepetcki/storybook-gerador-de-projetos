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
	title: 'COMPONENTES/Cards/Card'
};

export const Card = (args: any, { argTypes }: any) => ({
	props: {
		srcOne: {
			default: () => imgOne.src
		},
		altOne: {
			default: () => imgOne.alt
		},
		srcTwo: {
			default: () => imgTwo.src
		},
		altTwo: {
			default: () => imgTwo.alt
		},
		srcThree: {
			default: () => imgThree.src
		},
		altThree: {
			default: () => imgThree.alt
		}
	},
	template: `
<div class="container">
  <div class="row justify-content-between">
    <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card">
      <img :src="srcOne" class="card-img-top" :alt="altOne">
      <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card">
      <img :src="srcTwo" class="d-block w-100" :alt="altTwo">
      <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card">
      <img :src="srcThree" class="d-block w-100" :alt="altThree">
      <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  </div>
</div>`
});

Card.args = {
  srcOne: imgOne.src,
  altOne: imgOne.alt,
  srcTwo: imgTwo.src,
  altTwo: imgTwo.alt,
  srcThree: imgThree.src,
  altThree: imgThree.alt
};
