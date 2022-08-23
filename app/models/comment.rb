class Comment < ApplicationRecord
    belongs_to :account
    belongs_to :performance, optional: true

    validates :comment, presence: true
end
