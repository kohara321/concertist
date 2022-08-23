class Performance < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :accounts, through: :comments
end
