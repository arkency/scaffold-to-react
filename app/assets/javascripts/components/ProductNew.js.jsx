window.ProductNew = React.createClass({
    render: function() {
        return (
            <div>
                <h1>New Product</h1>
                <ProductForm {...this.props} />
                <a href={this.props.back_path}>Back</a>
            </div>
        );
    }
});