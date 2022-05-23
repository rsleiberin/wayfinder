class Version < ApplicationRecord
    belongs_to :character
    has_many :levels, dependent: :destroy
    has_one :version_ancestry
    has_one :ancestry, through: :version_ancestry
    has_one :version_heritage
    has_one :heritage, through: :version_heritage
    has_one :version_background
    has_one :background, through: :version_background
    has_one :version_character_class
    has_one :character_class, through: :version_character_class
    has_one :version_deity
    has_one :deity, through: :version_deity
    has_many :heritages, through: :ancestry
end
