import MyButton  from './components/MyButton.js'

const template  = `
    <div>
        <h1>Vue組件入口</h1>
        <MyButton />
    </div>
`;

export default {
    components: {
        MyButton
    },
    template
}