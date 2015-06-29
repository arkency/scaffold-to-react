json.back_path products_path
json.form_method "post"
json.csrf_token form_authenticity_token
json.partial! 'products/form.json', product: @product