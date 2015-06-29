json.show_path product_path(@product)
json.back_path products_path
json.partial! 'products/form', product: @product