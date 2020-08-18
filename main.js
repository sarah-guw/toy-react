/*
* jsx基于实DOM的实现
*
* */


import {createElement,Component,Render} from  './toy-react'

class MyComponent extends Component{
    render(){
        return <div>
            <h1>First component</h1>
            {this.children}
        </div>
    }
}

let a = <MyComponent id="a" class="c">
    <div>abc</div>
    <div>1234</div>
    <h3>This is children!</h3>
</MyComponent>
Render(a,document.body)






