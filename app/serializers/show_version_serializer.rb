class ShowVersionSerializer < ActiveModel::Serializer
  attributes :id, :name, :alignment
  has_many :levels
end
