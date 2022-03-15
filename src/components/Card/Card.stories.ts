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
	title: 'COMPONENTES/Card'
};

export const Card = () => ({
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
  <div class="row row-card justify-content-between mt-3">
    <div class="card-custom p-0">
    <img :src="srcThree" class="d-block w-100" :alt="altThree">
      <div class="card-body d-flex flex-column justify-content-end">
          <h3 class="m-0">Title</h3>
          <p class="m-0 card-text">Description</p>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <button type="button" class="btn btn-warning px-2">Ver mais</button>
          </div>
      </div>
    </div>
  </div>
  <div class="row courses">
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div class="card">
        <div class="card-image">
            <img :src="srcThree" class="d-block w-100" :alt="altThree">
        </div>
        <div class="p-4">
          <div class="card-content">
              <h4 class="title">Fazendo acordos altamente lucrativos</h4>
              <p>Aprenda como quebrar todas as objeções e reverter cenários ao seu favor.</p>
              <hr/>
          </div>
          <div class="card-action">
              <div class="price-container">
                <p class="old-price">
                    R$ 100,00
                </p>
                <p class="new-price">
                    R$ 80,00
                </p>
                <div class="d-flex flex-row justify-content-end">
                  Saiba mais <img width="25" alt="A arrow right" src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png" >
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
});
