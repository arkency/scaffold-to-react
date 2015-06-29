json.notice flash[:notice]
json.extract! @product, :title, :price
json.edit_path edit_product_path(@product)
json.back_path products_path