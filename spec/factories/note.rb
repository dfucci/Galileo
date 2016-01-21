FactoryGirl.define do
  factory :note do
    content {Faker::Lorem.paragraph(3)}
    association :experiment
  end
end
