var React = window.React;
var ReactDOM = window.ReactDOM;
var $ = window.$;

var ProductForm = React.createClass({
  render: function () {
    return (
      <form className={this.props.className}
            id={this.props.id}
            action={this.props.endpoint}
            acceptCharset="UTF-8"
            method={this.props.method}>
        <input name="utf8"
               type="hidden"
               value="✓" />
        <input type="hidden"
               name="authenticity_token"
               value={this.props.csrfToken} />
        <div className="field">
            <label htmlFor="product_title">Title</label>
            <br />
            <input type="text"
                   name="product[title]"
                   id="product_title" />
        </div>
        <div className="field">
            <label htmlFor="product_price">Price</label>
            <br />
            <input type="number"
                   name="product[price]"
                   id="product_price" />
        </div>
        <div className="actions">
            <input type="submit"
                   name="commit"
                   value={this.props.buttonLabel} />
        </div>
      </form>);
  }
});

var NewProduct = React.createClass({
  render: function () {
    return (<div>
      <h1>New Product</h1>
      <ProductForm
        endpoint={this.props.endpoint}
        method="POST"
        buttonLabel="Create Product"
        csrfToken={this.props.csrfToken}
        className="new_product"
        id="new_product" />
      <a href={this.props.backUrl}>Back</a>
    </div>);
  }
});

function csrfToken () {
  return $("meta[name='csrf-token']").attr("content");
};

function renderNewProduct () {
  $("[data-view='NewProduct']").each(function () {
    var dataset = $(this).data();
    ReactDOM.render(<NewProduct endpoint={dataset.endpoint}
                                backUrl={dataset.backUrl}
                                csrfToken={csrfToken()} />, this);
  });
};

$(document).on('page:load', function () {
  renderNewProduct();
});

$(function () {
  renderNewProduct();
});
