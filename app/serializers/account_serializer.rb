class AccountSerializer < ActiveModel::Serializer
  attributes :id, :email, :given_name, :family_name, :name, :picture, :password_digest
  attribute :performances do ||
    object.performances.uniq.map do |performance| 
      {
        **performance.attributes,
        comments: performance.comments.map do |comment| 
          {
            **comment.attributes,
            account: object
          }
        end
      }
    end
  end
end
