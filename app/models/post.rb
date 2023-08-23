class Post < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true

  def date_created
    created_at.strftime('%B %-d, %Y')
  end
end
