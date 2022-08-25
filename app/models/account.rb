class Account < ApplicationRecord
    has_secure_password

    has_many :comments
    has_many :performances, through: :comments

    validates :email, :given_name, :family_name, :name, presence: true
    validates :email, uniqueness: true
end
