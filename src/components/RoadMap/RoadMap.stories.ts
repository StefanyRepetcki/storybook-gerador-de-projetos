// @ts-ignore
import RoadMapComponent from './RoadMap.vue';

export default {
	title: 'DOCUMENTAÇÃO/Mapa de carreira',
	component: RoadMapComponent
};

const Template = () => ({
	components: { RoadMapComponent },
	template: '<RoadMapComponent/>'
});

export const RoadMap = Template.bind({});
