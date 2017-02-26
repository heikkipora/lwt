module LocalizationHelper
  require 'yaml'

  @@dictionaries = {'fi' => YAML.load_file('lib/dictionary_fi.yaml'),
                    'se' => YAML.load_file('lib/dictionary_se.yaml') }

  def t(keys)
    lookup(lang(@item), keys)
  end

  def lookup(lang, keys)
    value = @@dictionaries[lang]
    keys.split('.').each { |key| value = value[key] }
    value
  end

  def lang(item)
    item[:lang] || 'fi'
  end
end

include LocalizationHelper
