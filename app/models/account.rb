class Account < ApplicationRecord
    has_secure_password

    has_many :comments
    has_many :performances, through: :comments
end
