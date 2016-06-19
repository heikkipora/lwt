module ChildrenHelper

  def numeric_id(item)
    item.identifier.without_ext.split('/').last.to_i
  end

  def sorted_child_images(item)
    pattern = item.identifier.without_ext.gsub("index", "") + "*.jpg"
    images = @items.find_all(pattern)
    images.sort { |a, b| numeric_id(a) <=> numeric_id(b) }
  end

  def child_md_items(item)
    pattern = item.identifier.without_ext.gsub("index", "*/*.md")
    documents = @items.find_all(pattern)
    documents.reject { |i| i.identifier == item.identifier }
  end

  def parent_md_item(item)
    path_parts = item.identifier.to_s.split("/")
    path_parts.delete_at(-2)
    pattern =  path_parts.join("/")
    @items[pattern]
  end
end

include ChildrenHelper
