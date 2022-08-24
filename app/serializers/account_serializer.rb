class AccountSerializer < ActiveModel::Serializer
  attributes :id, :email, :given_name, :family_name, :name, :picture, :password_digest, :performances

  def performances
    object.performances.map.uniq do |performances|
      ::PerformanceSerializer.new(performances).attributes
    end
  end

  has_many :comments
end
