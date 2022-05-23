class Heritage < ApplicationRecord
    has_many :ancestry_heritages
    has_many :ancestries, through: :ancestry_heritages
end
