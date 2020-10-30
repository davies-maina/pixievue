import { Texture, Sprite, Text, Container } from 'pixi.js'
import { createRenderer } from '@vue/runtime-core'

const renderer = createRenderer({
    createElement(type) {
        let element;
        switch (type) {
            case "Container":
                element = new Container()
                break;
            case "Sprite":
                element = new Sprite()
                break;
        }
        return element
    },
    patchProp(el, key, prevValue, nextValue) {
       
        switch (key) {
            case 'texture':
                el.texture = Texture.from(nextValue)
                break;
            case 'onClick':
                el.on('pointertap', nextValue)
                break;
            default:
                el[key] = nextValue;
                break;
        }
    },
    setElementText(node, text) {
        
        const ctext = new Text(text)
        node.addChild(ctext)
    },
    createText(text) {
        return new Text(text)
    },
    insert(el, parent) {
        parent.addChild(el)
        
    },
    
    createComment() { },
    
    parentNode() { },
   
    nextSibling() { },
    
    remove(el) {
        const parent = el.parent;
        if (parent) {
            parent.removeChild(el)
        }
    }
})

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent)
}