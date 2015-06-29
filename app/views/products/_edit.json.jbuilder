json.show_path product_path(@product)
json.back_path products_path
json.form_method "put"
json.csrf_token form_authenticity_token
json.partial! 'products/form.json', product: @product