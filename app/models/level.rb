class Level < ApplicationRecord
  belongs_to :version
  has_many :level_feats
end
