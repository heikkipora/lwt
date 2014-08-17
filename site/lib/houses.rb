module HousesHelper

  def select_near(item)
    item.children.select { |item| item[:remote] != true }
  end

  def select_remote(item)
    item.children.select { |item| item[:remote] == true }
  end

  def sorted_near(item)
    select_near(item).sort { |a, b| a[:number] <=> b[:number] }
  end

  def sorted_remote(item)
    select_remote(item).sort { |a, b| a[:number] <=> b[:number] }
  end

end

include HousesHelper