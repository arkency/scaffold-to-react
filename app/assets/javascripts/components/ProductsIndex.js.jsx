window.ProductsIndex = React.createClass({
    render: function() {
        var products = [];
        for(var i = 0; i < this.props.products.length; ++i) {
            products.push(
                <tr key={this.props.products[i].id}>
                    <td>{this.props.products[i].title}</td>
                    <td>{this.props.products[i].price}</td>
                    <td>
                        <a href={this.props.products[i].show_path}>Show</a>
                    </td>
                    <td>
                        <a href={this.props.products[i].edit_path}>Edit</a>
                    </td>
                    <td>
                        <a href={this.props.products[i].destroy_path}>Destroy</a>
                    </td>
                </tr>
            );
        }

        return (
            <div>
                <p id="notice">{this.props.notice}</p>
                <h1>Listing Products</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th colSpan="3"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {products}
                    </tbody>
                </table>
                <br />
                <a href={this.props.new_product_path}>New product</a>
            </div>
        );
    }
});