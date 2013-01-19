class Graph < ActiveRecord::Base
  attr_accessible :category, :excel_url, :graph_type, :permalink, :visualization_name
end
