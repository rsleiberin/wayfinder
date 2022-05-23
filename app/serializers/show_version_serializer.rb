class ShowVersionSerializer < ActiveModel::Serializer
  attributes :id, :name, :character_name, :alignment
  has_many :levels
  has_one :version_ancestry
  has_one :ancestry, serializer: AncestrySerializer
  has_one :version_heritage
  has_one :heritage
  has_one :version_character_class
  has_one :character_class
  has_one :version_background
  has_one :background
  has_one :version_deity
  has_one :deity
end
