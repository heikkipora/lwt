module LocalizationHelper
  require 'yaml'

  @@dictionaries = {'fi' => YAML.load_file('lib/dictionary_fi.yaml'),
                    'se' => YAML.load_file('lib/dictionary_se.yaml'),
                    'en' => YAML.load_file('lib/dictionary_en.yaml') }

  def t(keys)
    # lookup('en', keys) || lookup('fi', keys)
    lookup('fi', keys)
  end

  def lookup(lang, keys)
    value = @@dictionaries[lang]
    keys.split('.').each { |key| value = value[key] }
    value
  end
end

include LocalizationHelper