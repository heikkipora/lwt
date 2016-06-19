module HousesHelper

  def select(item, location)
    child_md_items(item).select { |house| house[:remote] == location }
  end

  def sorted(item, location)
    select(item, location).sort { |a, b|
      if a[:number] == b[:number]
        a[:name] <=> b[:name]
      else
        a[:number] <=> b[:number]
      end
    }
  end

  def house_path(item)
    if lang(item) == 'se'
      item.path.gsub('/hus', '/kohteet')
    else
      item.path
    end
  end

  def finnish_house(item)
    finnish_item = item.identifier.to_s().gsub('2-hus', '2-kohteet')
    @items.find { |i| i.identifier == finnish_item }
  end

  def house_svg(item)
    folder = house_path(item).split("/")[-1]
    primary_img = finnish_house(item).identifier.without_ext.gsub('index', '') + folder
    if @items.find_all(primary_img + '.svg').one?
      house_path(item) + folder + '.svg'
    elsif @items.find_all(primary_img + '.jpg').one?
      house_path(item) + folder + '.jpg'
    else
      '/img/house-dummy.jpg'
    end
  end

end

include HousesHelper
