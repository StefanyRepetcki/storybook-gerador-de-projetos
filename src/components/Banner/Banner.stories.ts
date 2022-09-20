// @ts-ignore
import BannerComponent from './Banner.vue';

export default {
	title: 'COMPONENTES/Banner',
	component: BannerComponent
};

export const Banner = (args: any, { argTypes }: any) => ({
	props: Object.keys(argTypes),
	components: { BannerComponent },
	template: `
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <BannerComponent :title="title" :description="description" :button="button" :image="image" />
            </div>
        </div>
    </div>
    `
});

Banner.args = {
	title: 'First featurette heading',
	description:
		'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
	button: {
		text: 'Clique aqui',
		link: 'https://www.google.com.br'
	},
	image: 'https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg'
};
