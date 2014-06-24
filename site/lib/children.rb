module ChildrenHelper

  def numeric_id(item)
    item.identifier.split('/').last.to_i
  end

  def select_images(items)
    items.select { |item| item[:extension] == "jpg" }
  end

  def sorted_child_images(item)
    select_images(item.children).sort { |a, b| numeric_id(a) <=> numeric_id(b) }
  end
end

include ChildrenHelper