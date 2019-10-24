def bubble_sort(unsordet_array)
  # frozen_string_literal: true
  unsordet_array.size.times do
    (0...unsordet_array.size - 1).each do |x|
      first_elment = unsordet_array[x]
      second_elment = unsordet_array[x + 1]
      if second_elment < first_elment
        unsordet_array[x], unsordet_array[x + 1] = unsordet_array[x + 1], unsordet_array[x]
        next
      end
    end
  end
  unsordet_array
end

p bubble_sort([5, 2, 1, 6, 7])
