module ChildrenHelper

  def numeric_id(item)
    item.identifier.split('/').last.to_i
  end

  def sorted_children(item)
    item.children.sort { |a, b| numeric_id(a) <=> numeric_id(b) }
  end
end

include ChildrenHelper