class AccountSerializer < ActiveModel::Serializer
  attributes :id, :email, :given_name, :family_name, :name, :picture, :password_digest

  has_many :performances, include_nested_associations: true
  has_many :comments
end
