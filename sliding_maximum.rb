# frozen_string_literal: true

def sliding_maximum(k, array)
  maximum_numbers = []
  array.each_with_index do |value, index|
    next if array.size - k < index

    temp_big = value
    (1...k).each do |counter|
      temp = counter + index
      unless array[temp].nil?
        temp_big = array[temp] if array[temp] > temp_big
      end
    end
    maximum_numbers << temp_big
  end
  maximum_numbers
end








# puts sliding_maximum(3, [1, 3, 5, 7, 9, 2])
# => [5, 7, 9, 9]
puts sliding_maximum(4, [9, 3, 5, 1, 7, 10])
# => [9, 7, 10]
