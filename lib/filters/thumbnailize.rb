class Thumbnailize < Nanoc::Filter
  identifier :thumbnailize
  type :binary

  def run(filename, params={})
    system(
        'convert',
        filename,
        '-strip',
        '-interlace',
        'Plane',
        '-sampling-factor',
        '4:2:0',
        '-quality',
        '85%',
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
