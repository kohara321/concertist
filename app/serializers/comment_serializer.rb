class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :performance_id, :comment
end
