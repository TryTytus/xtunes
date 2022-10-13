import MusicBar from "../../../lib/components/mobile/MusicBar.svelte"

export default {
    title: 'Mobile/Components/MusicBar',
    component: MusicBar
}

export const Template = (args:any) => ({
    Component: MusicBar,
    props: args
})

export const Primary = Template.bind({});
Primary.args = {
    img: '/hamer.jpeg',
    bar: 20,
    title: 'Seek and destroy',
    author: 'Metallica'
};
  