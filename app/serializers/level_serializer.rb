class LevelSerializer < ActiveModel::Serializer
  attributes :id, :level_number
  has_one :version
end
