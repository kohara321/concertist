class AccountSerializer < ActiveModel::Serializer
  attributes :id, :email, :given_name, :family_name, :name, :picture, :password_digest

  has_many :performances
  has_many :comments
end
