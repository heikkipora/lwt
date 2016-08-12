module EventHelper
  def link_to_event(item)
    if item[:name]
      item[:name]
    else
      item[:title]
    end
  end

  def inline_event?(item)
    item.raw_content.empty?
  end

  def event_link(item)
    if inline_event?(item)
      item[:link]
    else
      item.path
    end
  end

  def has_gallery(item)
    item[:gallery] == 'yes'
  end

  def has_pdf_gallery(item)
    item[:gallery] == 'pdf'
  end

end

include EventHelper
