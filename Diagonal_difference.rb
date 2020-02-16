# frozen_string_literal: true

def diagonalDifference(arr)
  right_diagonal = left_diagonal = 0

  arr.size.times do |index|
    right_diagonal += arr[index][index]
    left_diagonal += arr[index][arr.size - (index + 1)]
  end

  (left_diagonal - right_diagonal).abs
end

puts diagonalDifference([
                          [11, 2, 4],
                          [4, 5, 6],
                          [10, 8, -12]
                        ])
