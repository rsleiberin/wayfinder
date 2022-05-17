class User < ApplicationRecord
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

    has_secure_password
    validates :email, length: {minimum: 3}, uniqueness: true
    validates :password, confirmation: true, length: {minimum: 8}
    validates :password_confirmation, presence: true

    has_many :characters, dependent: :destroy
    
end