module MetaTagsHelper
  def meta_title(item)
    if item[:name]
      item[:name]
    else
      item[:title]
    end
  end

  def is_house(item)
    item.key?(:address)
  end

  def meta_description(item)
    if is_house(item)
      t('meta.description_for_house') + item[:address]
    elsif item[:description]
      item[:description]
    else
      t('meta.description')
    end
  end

  def meta_image(item)
    if item[:preview]
      item[:preview]
    elsif is_house(item)
      preview_image = house_fb_preview(item)
      "http://loviisanwanhattalot.fi#{preview_image}"
    else
      "http://loviisanwanhattalot.fi#{item.path}1.jpg"
    end
  end

  def meta_url(item)
    "http://loviisanwanhattalot.fi#{item.path}"
  end
end

include MetaTagsHelper
