class AccountSerializer < ActiveModel::Serializer
  attributes :id, :email, :given_name, :family_name, :name, :picture, :password_digest
end
