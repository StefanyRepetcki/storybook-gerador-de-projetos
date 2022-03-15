<template>
    <div id="App">
        <Toast />
        <div class="card">
            <OrganizationChart :value="advancedData" :collapsible="true" class="company" selectionMode="single" :v-model:selectionKeys="selection"
                @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeCollapse="onNodeCollapse" @nodeExpand="onNodeExpand">
                <template #person="slotProps">
                    <div class="node-header ui-corner-top">{{slotProps.node.data.label}}</div>
                    <div class="node-content" v-if="slotProps.node.data.name">
                        <img :src="slotProps.node.data.avatar" width="32">
                        <div>{{slotProps.node.data.name}}</div>
                    </div>
                </template>
                <template #default="slotProps">
                    <span>{{slotProps.node.data.label}}</span>
                </template>
            </OrganizationChart>
        </div>
    </div>
</template>
<script>
import OrganizationChart from 'primevue/organizationchart';
import { Toast } from 'primevue/toast';
import '../../assets/scss/main.scss';
export default {
    name: 'RoadMap',
    components: {OrganizationChart, Toast},
    data() {
        return {
            advancedData: {
                key: '0',
                type: 'person',
                styleClass: 'p-person',
                data: {label: 'PROGRAMAÇÃO', name: '', avatar: 'https://cdn3.vectorstock.com/i/1000x1000/81/97/front-end-isolated-icon-simple-element-from-vector-28218197.jpg'},
                children: [
                    {
                        key: '0_2',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'DEV', name:'FRONT END', avatar: 'https://www.aotopo.com/wp-content/uploads/2018/02/servicos-desenvolvimento-front-end-311x311.png'},
                        children:[{
                            key: '0_2_0',
                            type: 'person',
                            styleClass: 'p-person',
                            data: {label: 'INTERNET', name:'HTTP, BROWSERS, DNV, DOMÍNIO, HOSTING'},
                            selectable: false,
                            children:[{
                                key: '0_2_0_0',
                                type: 'person',
                                styleClass: 'p-person',
                                data: {label: 'HTML', name:'SEMÂNTICA, FORMS, VALIDAÇÃO, BOAS PRÁTICAS, ACESSIBILIDADE, SEO'},
                                selectable: false,
                            },
                            {
                                key: '0_2_0_1',
                                type: 'person',
                                styleClass: 'p-person',
                                data: {label: 'CSS', name:'SEMÂNTICA, FAZER LAYOUTS, DESIGN RESPONSIVO E MEDIA QUERIES'},
                                selectable: false,
                            },
                            {
                                key: '0_2_0_2',
                                type: 'person',
                                styleClass: 'p-person',
                                data: {label: 'JAVASCRIPT', name:'SINTAXE E CONSTRUTORES BÁSICOS, MANIPULAÇÃO DE DOM, INTEGRAÇÃO DE API / AJAX, ES6+, JAVASCRIPT MODULAR'},
                                selectable: false,
                                children:[{
                                    key: '0_2_0_0',
                                    data: {label: 'GIT', name: 'CONCEITO DE VERSIONAMENTO, PRATICAS EM PLATAFORMAS DE VERSIONAMENTO COMO GITHUB, GITLAB, BITBUCKET'},
                                    selectable: false,
                                    type: 'person',
                                    styleClass: 'p-person',
                                    children:[{
                                        key: '0_2_0_0',
                                        data: {label: 'Segurança da WEB', name:'HTTPS, CORS, OWASP, POLÍTICA DE SEGURANÇA DE CONTEÚDO'},
                                        selectable: false,
                                        type: 'person',
                                        styleClass: 'p-person',
                                        children:[{
                                            key: '0_2_0_0',
                                            data: {label: 'Gerenciador de Pacotes', name:'npm, yarn'},
                                            selectable: false,
                                            type: 'person',
                                            styleClass: 'p-person',
                                            children:[{
                                                key: '0_2_0_0',
                                                data: {label: 'Arquitetura CSS', name: 'BEM, OOCSS, SMACSS'},
                                                selectable: false,
                                                type: 'person',
                                                styleClass: 'p-person',
                                            },
                                            {
                                                key: '0_2_0_0',
                                                data: {label: 'Pré processadores CSS', name: 'SASS, PostCSS, Less'},
                                                selectable: false,
                                                type: 'person',
                                                styleClass: 'p-person',
                                                children:[{
                                                    key: '0_2_0_0',
                                                    data: {label: 'Construir Ferramentas', name: 'Empacotadores de módulo, Executores de tarefa, Linters e Formatadores'},
                                                    selectable: false,
                                                    type: 'person',
                                                    styleClass: 'p-person',
                                                    children:[{
                                                        key: '0_2_0_0',
                                                        data: {label: 'Escolher um Framework'},
                                                        selectable: false,
                                                        type: 'person',
                                                        styleClass: 'p-person',
                                                        children:[{
                                                            key: '0_2_0_0',
                                                            data: {label: 'React.js', name: 'Redux, MobX'},
                                                            selectable: false,
                                                            type: 'person',
                                                            styleClass: 'p-person',
                                                        },
                                                        {
                                                            key: '0_2_0_0',
                                                            data: {label: 'Angular', name:'RxJS, NgRx'},
                                                            selectable: false,
                                                            type: 'person',
                                                            styleClass: 'p-person',
                                                        },
                                                        {
                                                            key: '0_2_0_0',
                                                            data: {label: 'Vue.js', name:'VueX'},
                                                            selectable: false,
                                                            type: 'person',
                                                            styleClass: 'p-person',
                                                            children:[{
                                                                key: '0_2_0_0',
                                                                data: {label: 'CSS Moderno', name:'Styled Components, Modulos CSS, Styled JSX, Emotion, Radium, Glamorous'},
                                                                selectable: false,
                                                                type: 'person',
                                                                styleClass: 'p-person',
                                                                children:[{
                                                                    key: '0_2_0_0',
                                                                    data: {label: 'WEB Components', name:'HTML Templates, Custom Elements, Shadow DOM'},
                                                                    selectable: false,
                                                                    type: 'person',
                                                                    styleClass: 'p-person',
                                                                    children:[{
                                                                        key: '0_2_0_0',
                                                                        data: {label: 'Verificadores de tipos', name:'TypeScript | Flow'},
                                                                        selectable: false,
                                                                        type: 'person',
                                                                        styleClass: 'p-person',
                                                                        children:[{
                                                                            key: '0_2_0_0',
                                                                            data: {label: 'Aplicativos da web progressivos', name:'Storage, Web Sockets, Service Workers, Location, Notification, Device Orientation, Payments, Credentials. PRPL Pattern, RAIL Model, Performance Metrics, Using Lighthouse, Using DevTools'},
                                                                            selectable: false,
                                                                            type: 'person',
                                                                            styleClass: 'p-person',
                                                                            children:[{
                                                                                key: '0_2_0_0',
                                                                                data: {label: 'Renderização do lado do servidor SSR', name:'React/Angular/Vue'},
                                                                                selectable: false,
                                                                                type: 'person',
                                                                                styleClass: 'p-person',
                                                                                children:[{
                                                                                    key: '0_2_0_0',
                                                                                    data: {label: 'GraphQL', name: 'Apollo, Relay Modern'},
                                                                                    selectable: false,
                                                                                    type: 'person',
                                                                                    styleClass: 'p-person',
                                                                                    children:[{
                                                                                        key: '0_2_0_0',
                                                                                        data: {label: 'Gerador de site estático', name:'Next.js, GatsbyJS, Nuxt.js, Vuepress, Jekyll, Hugo'},
                                                                                        selectable: false,
                                                                                        type: 'person',
                                                                                        styleClass: 'p-person',
                                                                                        children:[{
                                                                                            key: '0_2_0_0',
                                                                                            data: {label: 'Aplicação Mobile', name:'React Native | NativeScript | Fluuter | Ionic'},
                                                                                            selectable: false,
                                                                                            type: 'person',
                                                                                            styleClass: 'p-person',
                                                                                            children:[{
                                                                                                key: '0_2_0_0',
                                                                                                data: {label: 'Aplicação Desktop', name: 'Electron, Carlo, Proton Native'},
                                                                                                selectable: false,
                                                                                                type: 'person',
                                                                                                styleClass: 'p-person',
                                                                                                children:[{
                                                                                                    key: '0_2_0_0',
                                                                                                    data: {label: 'WebAssembly'},
                                                                                                    selectable: false,
                                                                                                    type: 'person',
                                                                                                    styleClass: 'p-person',
                                                                                                }]
                                                                                            }]
                                                                                        }]
                                                                                    }]
                                                                                }]
                                                                            }]
                                                                        }]
                                                                    }]
                                                                }]
                                                            }]
                                                        }]
                                                    }]
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    },
                    {
                        key: '0_2',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'DEV', name:'BACK END', avatar: 'https://www.hiremotely.com/uploads/developer-category/backend-developers.png'},
                        children:[{
                            key: '0_2_0',
                            data: {label: 'Development'},
                            selectable: false,
                            styleClass: 'department-cto',
                            children:[{
                                key: '0_2_0_0',
                                data: {label: 'Analysis'},
                                selectable: false,
                                styleClass: 'department-cto'
                            },
                            {
                                key: '0_2_0_1',
                                data: {label: 'Front End'},
                                selectable: false,
                                styleClass: 'department-cto'
                            },
                            {
                                key: '0_2_0_2',
                                data: {label: 'Back End'},
                                selectable: false,
                                styleClass: 'department-cto'
                            }]
                        },
                        {
                            key: '0_2_1',
                            data: {label: 'QA'},
                            selectable: false,
                            styleClass: 'department-cto'
                        },
                        {
                            key: '0_2_2',
                            data: {label: 'R&D'},
                            selectable: false,
                            styleClass: 'department-cto'
                        }]
                    }
                ]
            },
            selection: {}
        }
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.data.label, life: 3000});
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.data.label, life: 3000});
        },
        onNodeExpand(node) {
            this.$toast.add({severity:'success', summary: 'Node Expanded', detail: node.data.label, life: 3000});
        },
        onNodeCollapse(node) {
            this.$toast.add({severity:'success', summary: 'Node Collapsed', detail: node.data.label, life: 3000});
        }
    }
}
</script>
