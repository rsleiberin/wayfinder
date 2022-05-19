class ShowVersionSerializer < ActiveModel::Serializer
  attributes :id, :character_name, :alignment
  has_many :levels
end
