export default {
  title: 'COMPONENTES/Accordion',
};

export const Accordion = () => ({
  template: `
<div class="accordion accordion-flush border">
  <div class="accordion-item">
     <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          <p class="text-light">Accordion Item #1</p>
        </button>
     </h2>
     <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
     </div>
  </div>
</div>`,
});
