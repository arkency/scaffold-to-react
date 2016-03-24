var React = window.React;
var ReactDOM = window.ReactDOM;
var $ = window.$;

var RailsHiddenInputs = React.createClass({
  render: function () {
    return (
      <div>
          <input name="utf8"
                 type="hidden"
                 value="✓" />
          <input type="hidden"
                 name="authenticity_token"
                 value={this.props.csrfToken} />
      </div>
    );
  }
});

var ResourceField = React.createClass({
  handleChange: function (event) {
    this.props.onChange(event.target.value);
  },
  render: function () {
    return (
      <div className="field">
        <label htmlFor={this.fieldId()}>{this.props.name}</label>
        <br />
        <input type={this.props.type}
               name={this.fieldName()}
               id={this.fieldId()}
               value={this.props.value}
               onChange={this.handleChange} />
      </div>
    );
  },
  fieldId: function () {
    return this.props.resource + "_" + this.props.field;
  },
  fieldName: function () {
    return this.props.resource + "[" + this.props.field + "]";
  }
});

var ProductForm = React.createClass({
  render: function () {
    return (
      <form className={this.props.className}
            onSubmit={this.props.onSubmit}
            id={this.props.id}
            action={this.props.endpoint}
            acceptCharset="UTF-8"
            method={this.props.method}>
        <RailsHiddenInputs
            csrfToken={this.props.csrfToken} />
        <ResourceField
            resource="product"
            field="title"
            name="Title"
            value={this.props.title}
            onChange={this.props.onTitleChange}
            type="text" />
        <ResourceField
            resource="product"
            field="price"
            name="Price"
            value={this.props.price}
            onChange={this.props.onPriceChange}
            type="number" />
        <div className="actions">
            <input type="submit"
                   name="commit"
                   value={this.props.buttonLabel} />
        </div>
      </form>);
  }
});

var NewProduct = React.createClass({
  getInitialState: function () {
    return {
      title: "",
      price: 0.0
    };
  },
  changeTitle: function (newTitle) {
    this.setState({ title: newTitle });
  },
  changePrice: function (newPrice) {
    this.setState({ price: newPrice });
  },
  submitForm: function (event) {
    this.props.onSubmit(event, this.state);
  },
  render: function () {
    return (<div>
      <h1>New Product</h1>
      <ProductForm
        endpoint={this.props.endpoint}
        method="POST"
        buttonLabel="Create Product"
        csrfToken={this.props.csrfToken}
        className="new_product"
        title={this.state.title}
        price={this.state.price}
        onTitleChange={this.changeTitle}
        onPriceChange={this.changePrice}
        onSubmit={this.submitForm}
        id="new_product" />
      <a href={this.props.backUrl}>Back</a>
    </div>);
  }
});

function csrfToken () {
  return $("meta[name='csrf-token']").attr("content");
};

function submitNewProductForm(event, productData) {
  event.preventDefault();
  var request = $.ajax({
    url: "/products",
    type: "post",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    processData: false,
    data: JSON.stringify({ product: productData })
  });

  request.success(function (data) {
    alert("Success! Received data: " + JSON.stringify(data));
  });

  request.fail(function () {
    alert("Request failed :(");
  });
}

function renderNewProduct () {
  $("[data-view='NewProduct']").each(function () {
    var dataset = $(this).data();
    ReactDOM.render(<NewProduct endpoint={dataset.endpoint}
                                backUrl={dataset.backUrl}
                                csrfToken={csrfToken()}
                                onSubmit={submitNewProductForm} />, this);
  });
};

$(document).on('page:load', function () {
  renderNewProduct();
});

$(function () {
  renderNewProduct();
});
