class Optimize < Nanoc::Filter
  identifier :optimize
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
        params[:size] + '>',
        output_filename
    )
  end
end
