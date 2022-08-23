class PerformanceSerializer < ActiveModel::Serializer
  attributes :id, :performance_url, :description, :workTitle

  has_many :comments
  has_many :accounts
end
