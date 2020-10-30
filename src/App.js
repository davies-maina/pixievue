
import { ref, computed, defineComponent, h } from '@vue/runtime-core'
import StartPage from './page/Startpage'
import GamePage from './page/Gamepage'

export default defineComponent({
    setup() {
       
        const currentPageName = ref('GamePage')
        
        const currentPage = computed(() => {
            if (currentPageName.value == 'StartPage') {
                return StartPage;
            } else if (currentPageName.value == 'GamePage') {
                return GamePage;
            }
        })
        return {
            currentPage,
            currentPageName
        }
    },
    render(ctx) {
        return h("Container", [h(ctx.currentPage, {
            onChanagePage(page) {
               
                ctx.currentPageName = page;
            }
        })])
        
    }
})  