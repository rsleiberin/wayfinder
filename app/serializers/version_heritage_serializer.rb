class VersionHeritageSerializer < ActiveModel::Serializer
  attributes :id
  has_one :version
  has_one :heritage
end
