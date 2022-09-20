export default {
  title: 'COMPONENTES/Forms',
};

export const Form2 = () => ({
  template: `<section id="last">
      <div class="container">
          <div class="row">
              <div class="col-lg-8 col-lg-offset-2 text-xs-center">
                  <h2 class="margin-top-0 wow fadeIn">Entrar em contato</h2>
                  <hr class="primary">
                  <p>Adoramos o feedback. Preencha o formulário abaixo e retornaremos o mais breve possível.</p>
              </div>
              <div class="col-lg-10 col-lg-offset-1 text-xs-center">
                  <form class="contact-form row">
                      <div class="col-md-4">
                          <label></label>
                          <input type="text" class="form-control" placeholder="Nome">
                      </div>
                      <div class="col-md-4">
                          <label></label>
                          <input type="text" class="form-control" placeholder="E-mail">
                      </div>
                      <div class="col-md-4">
                          <label></label>
                          <input type="text" class="form-control" placeholder="Telefone">
                      </div>
                      <div class="col-md-12">
                          <label></label>
                          <textarea class="form-control" rows="9" placeholder="Sua mensagem aqui.."></textarea>
                      </div>
                      <div class="d-flex justify-content-center">
                          <button type="button" class="mt-3 btn btn-primary w-50">Enviar</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </section>`,
});
