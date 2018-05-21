import React from 'react';
import myPropTypes from 'prop-types';

/*

Еще один пример компонента высшего порядка (Higher-Order Component)

Обарачивает передаваемый компонет в div с полученным css классом.

*/

const withClass = props => (
  <div className={props.cssClasses} data-mydata="MyDataAttribute">
    {props.children}
  </div>
);

withClass.defaultProps = {
  children: <div>Higher-Order Component</div>,
  cssClasses: '',
};

withClass.propTypes = {
  children: myPropTypes.node,
  cssClasses: myPropTypes.string,
};

export default withClass;
