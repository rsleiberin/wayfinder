class AncestryHeritageSerializer < ActiveModel::Serializer
  attributes :id
  has_one :ancestry
  has_one :heritage
end
