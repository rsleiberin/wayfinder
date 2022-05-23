class VersionBackgroundSerializer < ActiveModel::Serializer
  attributes :id
  has_one :version
  has_one :background
end
