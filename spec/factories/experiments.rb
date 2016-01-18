FactoryGirl.define do
  factory :experiment do
    title     { Faker::Lorem.sentence  }
    status         { Faker::Lorem.word  }
    start_day  { Faker::Date.backward(10) }
    aim       { Faker::Lorem }
  end
end
