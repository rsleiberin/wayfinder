class Version < ApplicationRecord
    belongs_to :character
    has_many :levels, dependent: :destroy
    has_one :version_ancestry
    has_one :ancestry, through: :version_ancestry
    has_one :version_heritage
    has_one :heritage, through: :version_heritage
end
