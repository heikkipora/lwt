require 'digest'
require 'nanoc'

module Nanoc3::DataSources

  class Static < Nanoc3::DataSource

    identifier :static

    def items
      # Get prefix
      prefix = config[:prefix] || 'static'

      # Get all files under prefix dir
      filenames = Dir[prefix + '/**/*'].select { |f| File.file?(f) }

      # Convert filenames to items
      filenames.map do |filename|
        attributes = {
          :extension => File.extname(filename)[1..-1],
          :filename  => filename,
        }
        identifier = filename[(prefix.length+1)..-1]

        mtime      = File.mtime(filename)

        Nanoc3::Item.new(
          filename,
          attributes,
          identifier,
          :binary => true, :mtime => mtime
        )
      end
    end
  end
end
