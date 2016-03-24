var React = window.React;
var ReactDOM = window.ReactDOM;
var $ = window.$;

var NewProduct = React.createClass({
  render: function () {
    return <p>Hello, World!</p>;
  }
});

$(function () {
  $("[data-view='NewProduct']").each(function () {
    ReactDOM.render(<NewProduct />, this);
  });
});