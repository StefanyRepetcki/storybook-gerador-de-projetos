export default {
	title: 'DOCUMENTAÇÃO/Commits semânticos',
};

const Template = () => ({
	template: `
	<div class="d-flex justify-content-center">
		<div>
			<h3>Padronização de commits</h3>
			<ul class="list-group mb-3">
				<li class="list-group-item">&lt;tipo&gt;[escopo opcional]: &lt;descrição&gt;</li>
				<li class="list-group-item">&lt;corpo opcional&gt;</li>
				<li class="list-group-item">&lt;rodapé opcional&gt;</li>
			</ul>
			<ul>
				<li><b>build:</b> Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm),</li>
				<li><b>ci:</b> Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs);</li>
				<li><b>docs:</b> referem-se a inclusão ou alteração somente de arquivos de documentação;</li>
				<li><b>feat:</b> Tratam adições de novas funcionalidades ou de quaisquer outras novas implantações ao código;</li>
				<li><b>fix:</b> Essencialmente definem o tratamento de correções de bugs;</li>
				<li><b>perf:</b> Uma alteração de código que melhora o desempenho;</li>
				<li><b>refactor:</b> Tipo utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada;</li>
				<li><b>style:</b> Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.);</li>
				<li><b>test:</b> Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD);</li>
				<li><b>chore:</b> Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas que realmente não entram em produção;</li>
				<li><b>env:</b> basicamente utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.</li>
			</ul>
		</div>
	</div>`
});

export const Commit = Template.bind({});
