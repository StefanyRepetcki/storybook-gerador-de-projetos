export default {
	title: 'COMPONENTES/Buttons',
	argTypes: { onClick: { action: 'clicked' } }
};

export const ButtonExemple = (args: any, { argTypes }: any) => ({
	template: `
<div class="container">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
  <button type="button" class="btn btn-link">Link</button>
  <br/>
  <div class="mt-5">
    <button type="button" class="btn btn-custom">Primary</button>
    <button type="button" class="btn btn-custom-pink">Primary</button>
    <button type="button" class="btn btn-custom-gradient">Primary</button>
  </div>
</div>`
});
