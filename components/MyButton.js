const template = `
    <button @click="count++">點擊了{{count}}次</button>
`;

export default {
    data(){
        return {
            count: 0
        }
    },
    template: template
}