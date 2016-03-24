var React = window.React;
var ReactDOM = window.ReactDOM;
var $ = window.$;

var NewProduct = React.createClass({
  render: function () {
    return (<div>
      <h1>New Product</h1>
      <form className="new_product"
            id="new_product"
            action={this.props.endpoint}
            acceptCharset="UTF-8"
            method="post">
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
                 value="Create Product" />
        </div>
      </form>
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
