import React from 'react';

/* Это пример спобоба реализации компонента высшего порядка когда
Во-первых имя файла начинается с маленькой буквы.
Ну и во-вторых сам пример ниже.
С помощью оператора ... прокидываем пропсы.
*/

const anotherHocExample = (WrappedComponent, className) => (
  props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
);

export default anotherHocExample;

/*
Функция можт возвращать как обычную функцию, так и класс. Примерно вот так:
const anotherHocExample = (WrappedComponent, className) => (
  return class extends React.Component {
    render(){
      return(
      <div className={className}>
        <WrappedComponent {...this.props} />
      </div>
      )
    }
  }
);

Если функция возвращает анонимную функция (или анонимный класс),
то компонент в dev tools будет отображаться как <Unknown></Unknown>

Например если так написать
const anotherHocExample = (WrappedComponent, className) => {
  const Wrapper = props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
  return Wrapper;
};

то компонент в dev tools будет отображаться как <Wrapper></Wrapper>
*/
