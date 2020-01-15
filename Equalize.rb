# frozen_string_literal: true

def equalizeArray(arr)
  hash_count = {}
  max_repat_number = 0

  arr.each do |elment|
    hash_count[elment] = hash_count[elment].nil? ? 1 : hash_count[elment] + 1

    max_repat_number = hash_count[elment]  if hash_count[elment] > max_repat_number
  end

  arr.size - max_repat_number
end

puts equalizeArray([3, 3, 2, 1, 3])
