FactoryGirl.define do
  factory :experiment do
    title     { Faker::Lorem.sentence  }
    start_day  { Faker::Date.backward(10) }
    aim       { Faker::Lorem }
    status {"scoping"}
  end
  factory :experiment_with_user, parent: :experiment do
    after(:create) do |experiment|
      experiment.users << FactoryGirl.create(:user)
    end
  end
end
