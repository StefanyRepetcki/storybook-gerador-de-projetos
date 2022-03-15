// @ts-ignore
import srcImage from '../../assets/images/imageinsta.jpg';

const img = {
	src: srcImage,
	alt: 'teste'
};

export default {
	title: 'DOCUMENTAÇÃO/Checklist de estudos',
};

const Template = () => ({
	props: {
		src: {
			default: () => img.src
		}
	},
	template: `
	<div class="d-flex justify-content-center">
		<img :src="src" class="d-block" width="700" >
	</div>`
});

export const Checklist = Template.bind({});
