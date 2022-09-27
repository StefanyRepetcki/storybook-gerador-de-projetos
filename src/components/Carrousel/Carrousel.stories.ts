export default {
    title: 'COMPONENTES/Carousel',
  };

export const Carousel = () => ({
    template: `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-100" src="https://static.wixstatic.com/media/830e6b_6a371e7afbdd4399902883ad9d0733ff~mv2.png/v1/fill/w_640,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/830e6b_6a371e7afbdd4399902883ad9d0733ff~mv2.png" alt="First slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="https://thumbs.dreamstime.com/b/banner-dentista-com-dentes-d-e-espa%C3%A7o-de-texto-vetor-174750811.jpg" alt="Second slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-country-tooth-toothbrush-white-image_15033.jpg" alt="Third slide">
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>`
});
