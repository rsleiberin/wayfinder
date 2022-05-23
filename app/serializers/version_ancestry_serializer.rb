class VersionAncestrySerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :version_id
  belongs_to :ancestry_id
end
