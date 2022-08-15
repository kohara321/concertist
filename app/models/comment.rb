class Comment < ApplicationRecord
    belongs_to :account
    belongs_to :perfomance

    validates :comment, presence: true
end
