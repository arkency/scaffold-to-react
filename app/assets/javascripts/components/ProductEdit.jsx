window.ProductEdit = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Editing Product</h1>
        <ProductForm {...this.props} />
        <a href={this.props.show_path}>Show</a> |
        <a href={this.props.back_path}>Back</a>
      </div>
    );
  }
});