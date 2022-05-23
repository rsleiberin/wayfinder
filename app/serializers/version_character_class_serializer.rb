class VersionCharacterClassSerializer < ActiveModel::Serializer
  attributes :id
  has_one :version
  has_one :character_class
end
