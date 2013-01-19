class Graph < ActiveRecord::Base
  attr_accessible :category, :excel_url, :graph_type, :permalink, :visualization_name

  #GRAPH_TYPES = ["scatter", "airports", "other", "other"]

  GRAPH_URLS = ["https://raw.github.com/gist/3887118/thumbnail.png",
                "https://raw.github.com/gist/3885705/thumbnail.png"]


end
