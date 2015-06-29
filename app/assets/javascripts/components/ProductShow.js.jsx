window.ProductShow = React.createClass({
  render: function() {
    return (
      <div>
        <p id="notice">{this.props.notice}</p>
        <p>
          <strong>Title:</strong>
          {this.props.title}
        </p>
        <p>
           <strong>Price:</strong>
           {this.props.price}
        </p>

        <a href={this.props.edit_path}>Edit</a> |
        <a href={this.props.back_path}>Back</a>
      </div>
    );
  }
});