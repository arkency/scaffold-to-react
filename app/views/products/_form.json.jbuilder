json.extract! product, :id, :title, :price, :created_at, :updated_at
json.errors product.errors.full_messages
json.form_path product_path(product)