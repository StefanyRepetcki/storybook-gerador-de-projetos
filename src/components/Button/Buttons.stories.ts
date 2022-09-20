export default {
	title: 'COMPONENTES/Buttons',
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: ['btn btn-primary', 'btn btn-secondary', 'btn btn-success', 'btn btn-danger', 'btn btn-warning', 'btn btn-info', 'btn btn-light', 'btn btn-dark', 'btn btn-link', 'btn btn-custom', 'btn btn-custom-pink', 'btn btn-custom-gradient', 'btn btn-custom', 'btn btn-custom-pink', 'btn btn-custom-gradient']
            },
            default: 'btn btn-primary'
        },
        disabled: {
            control: {
                type: 'boolean'
            }
        },
        type: {
            control: {
                type: 'select',
                options: ['button', 'submit', 'reset']
            }
        },
        text: {
            control: {
                type: 'text'
            }
        },
        icon: {
            control: {
                type: 'select',
                options: ['fa fa-plus', 'fa fa-minus', 'fa fa-times', 'fa fa-check', 'fa fa-arrow-left', 'fa fa-arrow-right', 'fa fa-arrow-up', 'fa fa-arrow-down', 'fa fa-arrow-circle-left', 'fa fa-arrow-circle-right', 'fa fa-arrow-circle-up', 'fa fa-arrow-circle-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left', 'fa fa-arrow-circle-o-right', 'fa fa-arrow-circle-o-up', 'fa fa-arrow-circle-o-down', 'fa fa-arrow-circle-o-left']
            },
        },
    },
};

export const Button = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    template: `
    <div class="container">
        <button :type="type" :class="color" :disabled="disabled">{{text}} <i class="icon"></i> </button>
    </div>`
});

Button.args = {
    text: 'Button',
    type: 'button',
    color: 'btn btn-primary',
    disabled: false,
    icon: ''
};
