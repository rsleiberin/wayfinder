class VersionDeitySerializer < ActiveModel::Serializer
  attributes :id
  has_one :version
  has_one :deity
end
