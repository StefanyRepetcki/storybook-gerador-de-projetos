export default {
  title: 'COMPONENTES/Footer',
  argTypes: {
   colorbutton: {
     name: 'Cor do botão',
     description: 'Você pode alterar a cor do botão para qual desejar',
     defaultValue: { summary: 'btn btn-primary' },
     control: {
       type: 'select',
       options: [
         'btn btn-primary',
         'btn btn-secondary',
         'btn btn-success',
         'btn btn-danger',
         'btn btn-warning',
         'btn btn-info',
         'btn btn-light',
         'btn btn-dark',
         'btn btn-link',
       ],
     },
   },
   colorfooter: {
      name: 'Cor do Footer',
      description: 'Você pode alterar a cor do Footer para qual desejar, padrão Bootstrap',
      defaultValue: { summary: 'bg-light text-dark border' },
      control: {
         type: 'select',
         options: [
           'bg-primary',
           'bg-secondary',
           'bg-success',
           'bg-danger',
           'bg-warning',
           'bg-info',
           'bg-light text-dark border',
           'bg-dark',
           'bg-white text-dark',
         ],
       },
   },
   coresTextos: {
    name: 'Cores dos textos no Footer',
    description: 'Você pode alterar a cor dos textos para qual desejar, padrão Bootstrap',
    defaultValue: { summary: 'text-dark' },
     control: {
       type: 'select',
       options: [
        'text-primary',
        'text-secondary',
        'text-success',
        'text-danger',
        'text-warning',
        'text-info',
        'text-light',
        'text-dark',
        'text-muted',
        'text-white',
       ],
     },
   },
   label: {
      name: 'Placeholder',
      description: '',
   },
   botao: {
    name: 'Botão',
    description: 'Escreva algo atrativo para seu botão',
    defaultValue: { summary: 'Clique Aqui' },
   },
 },
};

export const Footer = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  template: `
<footer :class="colorfooter" id="footer">
  <div class="container-fluid p-5">
    <div class="row">
        <div class="col-12 col-sm-6 col-md-3 col-lg-3 ">
            <h6 :class="coresTextos">Informações</h6>
            <ul class="list-unstyled">
                <li><a :class="coresTextos" href="">Produtos</a></li>
                <li><a :class="coresTextos" href="">Serviços</a></li>
                <li><a :class="coresTextos" href="">Benefícios</a></li>
                <li><a :class="coresTextos" href="">Desenvolvedores</a></li>
            </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-3  column">
            <h6 :class="coresTextos">Sobre</h6>
            <ul class="list-unstyled">
                <li><a :class="coresTextos" href="#">Contato</a></li>
                <li><a :class="coresTextos" href="#">Informações</a></li>
                <li><a :class="coresTextos" href="#">Política de Privacidade</a></li>
                <li><a :class="coresTextos" href="#">Termos e condições</a></li>
            </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-3  column">
            <h6 :class="coresTextos">Newsletter</h6>
            <form>
                <div class="form-group mb-3">
                  <input class="form-control me-2" type="search" :placeholder="label" aria-label="Search">
                </div>
                <div class="form-group">
                  <input type="button" :class="colorbutton" :value="botao">
                </div>
            </form>
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-3  text-xs-right">
            <h6 :class="coresTextos">Redes</h6>
            <ul class="list-inline">
                <li class="list-inline-item"><a :class="coresTextos" rel="nofollow" href="" title="Twitter"><i class="icon-lg ion-social-twitter-outline"></i></a>&nbsp;</li>
                <li class="list-inline-item"><a :class="coresTextos" rel="nofollow" href="" title="Facebook"><i class="icon-lg ion-social-facebook-outline"></i></a></li>
            </ul>
        </div>
    </div>
</div>
</footer>
`,
});

Footer.args = {
   label: 'Seu e-mail',
   botao: 'Inscreva-se',
   colorbutton: 'btn btn-info',
   colorfooter: 'bg-light text-dark border',
   coresTextos: 'text-dark',
};
