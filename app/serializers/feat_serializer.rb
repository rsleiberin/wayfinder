class FeatSerializer < ActiveModel::Serializer
  attributes :id, :name, :rarity, :level
  has_one :source
end
