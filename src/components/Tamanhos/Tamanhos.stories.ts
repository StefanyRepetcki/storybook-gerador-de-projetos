export default {
	title: 'DESIGN SYSTEM/Tamanhos e fontes',
};

export const Fontes = () => ({
	template: `
<div class="container">
  <h1>Cabeçalhos</h1>
  <hr>
    <h1>h1. Cabeçalho Design</h1>
    <h2>h2. Cabeçalho Design</h2>
    <h3>h3. Cabeçalho Design</h3>
    <h4>h4. Cabeçalho Design</h4>
    <h5>h5. Cabeçalho Design</h5>
    <h6>h6. Cabeçalho Design</h6><br><br>
    <h1>Elementos</h1>
    <hr>
    <p>Você pode usar a tag _mark_ para <mark>destacar</mark> textos.</p>
    <p><del>Esta linha de texto deve ser tratada com um texto deletado.</del></p>
    <p><s>Esta linha de texto deve ser tratada como algo impreciso.</s></p>
    <p><ins>Esta linha de texto deve ser tratada como uma adição ao documento.</ins></p>
    <p><u>Esta linha de texto vai ser renderizada com underline.</u></p>
    <p><small>Esta linha deve ser usada para letras com tamanhos menores.</small></p>
    <p><strong>Esta linha renderiza em negrito.</strong></p>
    <p><em>Esta linha renderiza em itálico.</em></p>
</div>`,
});
