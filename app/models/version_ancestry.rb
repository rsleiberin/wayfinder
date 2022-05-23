class VersionAncestry < ApplicationRecord
  belongs_to :version
  belongs_to :ancestry
end
