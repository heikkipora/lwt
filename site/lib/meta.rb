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
      "Tervetuloa kylään 30.-31.8.2014 osoitteessa #{item[:address]}"
    else
      'Valtakunnalliset perinne- ja korjausrakentamispäivät Loviisassa 30.-31.8.2014. Vanhoja taloja, ihania koteja, historiallisia pihapiirejä ja hurmaavia puutarhoja. Taidetta, antiikkia ja lukemattomia kirppiksiä.'
    end
  end

  def meta_image(item)
    if item.children
      "http://loviisanwanhattalot.fi/2014#{item.path}1.jpg"
    else
      'http://loviisanwanhattalot.fi/img/preview.jpg'
    end
  end

  def meta_url(item)
    "http://loviisanwanhattalot.fi/2014#{item.path}"
  end
end

include MetaTagsHelper