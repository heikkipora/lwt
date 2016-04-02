class Thumbnailize < Nanoc::Filter
  identifier :thumbnailize
  type :binary

  def run(filename, params={})
    system(
        'convert',
        filename,
        '-resize',
        params[:size] + '^',
        '-gravity',
        'center',
        '-extent',
        params[:size],
        output_filename
    )
  end
end