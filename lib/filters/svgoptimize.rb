class SvgOptimize < Nanoc::Filter
  identifier :svgoptimize
  type :binary

  def run(filename, params={})
    system(
        'svgo',
        '--disable=collapseGroups',
        filename,
        output_filename
    )
  end
end
