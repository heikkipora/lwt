class SvgOptimize < Nanoc::Filter
  identifier :svgoptimize
  type :binary

  def run(filename, params={})
    system(
        'svgo',
        '--disable=collapseGroups',
        '-i',
        filename,
        '-o',
        output_filename
    )
  end
end
