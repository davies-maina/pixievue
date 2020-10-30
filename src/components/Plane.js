
import { toRefs, watch, ref, h, defineComponent, reactive } from "@vue/runtime-core";
import planeImg from "../../assets/plane.png";
export default defineComponent({
    props: ['x', 'y'],
    setup(props) {
       
        const { x, y } = toRefs(props)
        return {
            x,
            y
        }
    },
    render(ctx) {
        return h("Container", { x: ctx.x, y: ctx.y }, [h('Sprite', { texture: planeImg })]);
    }
})