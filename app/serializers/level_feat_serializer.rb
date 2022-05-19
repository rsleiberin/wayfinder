class LevelFeatSerializer < ActiveModel::Serializer
  attributes :id, :type
  has_one :level
end
