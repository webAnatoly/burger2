/* Higher-Order Component

Higher-order component is a function
that takes a component and returns a new component.
See more in react documentation
https://reactjs.org/docs/higher-order-components.html

Конкретно этот компонет выполняет роль обертки для реактовсих элементов,
если мы не хотим оборачивать элементы в лишний div.
Т.е. там где нам не нужны лишние div'ы в реальном DOM'e, то можно оборачивать реактовские
элементы в этот компонент и в реальный DOM всё будет рендериться без div елемента.

Вообще компоненты высшего порядка это такой паттерн/техника.
Суть в том, что HOC это чистая функция, которая на вход принимает компонет и
возвращает новый компонет. Причем исходный компонент никак не меняет и не модифицирует.
Подробее читай тут: https://reactjs.org/docs/higher-order-components.html
*/

const aux = props => props.children;

export default aux;

/*
Aux это сокращение от auxiliary
*/
