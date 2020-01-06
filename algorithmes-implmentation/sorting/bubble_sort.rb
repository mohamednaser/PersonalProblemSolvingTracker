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

def bubble_sort_by(arr)
  # frozen_string_literal: true
  arr.size.times do
    (0...arr.size - 1).each do |i|
      comparison = yield(arr[i], arr[i + 1])
      arr[i], arr[i + 1] = arr[i + 1], arr[i] if comparison.positive?
    end
  end
  arr
end

p bubble_sort_by([5, 2, 1, 6, 7]) { |left, right| left - right }
# p bubble_sort([5, 2, 1, 6, 7])
