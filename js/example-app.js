import OrderProducts from './components/orderProducts';
var React = require('react');


jQuery( document).ready( function(){
    React.render( <OrderProducts/>, document.querySelector( '#react-replacer' ) );
});

