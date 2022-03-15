export default {
    title: 'DESIGN SYSTEM/Sistema de grid',
};

export const Grids = () => ({
    template: `
  <div class="container p-2">
    <h1>GRIDS</h1>
    <div class="row border p-2">
        <div class="col-12 border p-2">One Row</div>
    </div>
    <div class="row border p-2">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 border p-2">Two</div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 border p-2">Two</div>
    </div>
    <div class="row border p-2">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 border p-2">Three</div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 border p-2">Three</div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 border p-2">Three</div>
    </div>
    <div class="row border p-2">
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 border p-2">Four</div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 border p-2">Four</div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 border p-2">Four</div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 border p-2">Four</div>
    </div>
  </div>`,
});
