class Version < ApplicationRecord
    belongs_to :character
    has_many :levels
end
