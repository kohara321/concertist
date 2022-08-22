class Performance < ApplicationRecord
    has_many :comments
    has_many :accounts, through: :comments

    # validates :performance, presence: true
end
