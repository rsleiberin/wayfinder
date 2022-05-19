class AncestrySerializer < ActiveModel::Serializer
  attributes :id, :name, :hit_points, :size, :speed, :vision
end
