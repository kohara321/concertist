class CommentSerializer < ActiveModel::Serializer
  attributes :id, :account_id, :performance_id, :comment

  belongs_to :account
  belongs_to :performance
end
