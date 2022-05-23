class Ancestry < ApplicationRecord
    has_many :ancestry_heritages
    has_many :heritages, through: :ancestry_heritages
    has_many :version_ancestries
end
