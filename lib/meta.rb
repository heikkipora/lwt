module MetaTagsHelper
  def meta_title(item)
    if item[:name]
      item[:name]
    else
      item[:title]
    end
  end

  def meta_description(item)
    if item[:address]
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
    else
      "http://loviisanwanhattalot.fi#{item.path}1.jpg"
    end
  end

  def meta_url(item)
    "http://loviisanwanhattalot.fi#{item.path}"
  end
end

include MetaTagsHelper