class AncestrySerializer < ActiveModel::Serializer
  attributes :id, :name, :hit_points, :size, :speed, :vision
  has_many :ancestry_heritages
  has_many :heritages
end
