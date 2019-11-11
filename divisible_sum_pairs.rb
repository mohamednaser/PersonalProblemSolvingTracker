# frozen_string_literal: true

def divisibleSumPairs(n, k, ar)
  number_of_pairs = 0

  (0...n).each do |i|
    (0...n).each do |j|
      number_of_pairs += 1 if (ar[i] + ar[j]) % k == 0 && j > i
    end
  end

  number_of_pairs
end

p divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])
