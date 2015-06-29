json.new_product_path new_product_path()
json.notice flash[:notice]
json.products(@products) do |product|
  json.extract! product, :id, :title, :price
  json.show_path product_path(product)
  json.edit_path edit_product_path(product)
  json.destroy_path product_path(product)
end