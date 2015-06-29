window.ProductForm = React.createClass({
  render: function() {
    var errors = null;
    if(this.props.errors.length > 0) {
      var errorsList = [];
      for(var i = 0; i < this.props.errors.length; ++i) {
        errorsList.push(<li key={"error-" + i}>{this.props.errors[i]}</li>)
      }

      errors = (
        <div id="error_explanation">
          <h2>Errors prohibited this product from being saved:</h2>
          <ul>
            {errorsList}
          </ul>
        </div>
      );
    }

    return (
      <form action={this.props.form_path} method="post">
        {errors}
        <input type="hidden" name="_method" defaultValue={this.props.form_method} />
        <input type="hidden" name="authenticity_token" defaultValue={this.props.csrf_token} />
        <input type="hidden" name="UTF-8" defaultValue="✓" />
        <div className="field">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="product[title]" defaultValue={this.props.title} />
        </div>
        <div className="field">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="product[price]" defaultValue={this.props.price} />
        </div>
        <div className="actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
});