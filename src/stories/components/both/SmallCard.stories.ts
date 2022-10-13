import SmallCard from '../../../lib/components/both/SmallCard.svelte';

export default {
	title: 'SmallCard',
	component: SmallCard
};

export const Template = (args) => ({
	Component: SmallCard,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	img: '/hamer.jpeg'
};
