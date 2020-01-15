# frozen_string_literal: true

def chocolateFeast(n, c, m)
  total_choclate_amount = number_of_wrappers = n / c

  while number_of_wrappers >= m
    number_of_wrappers -= (m - 1)
    total_choclate_amount += 1
  end

  total_choclate_amount
end

puts chocolateFeast(10, 2, 5)
puts chocolateFeast(12, 4, 4)
puts chocolateFeast(6, 2, 2)
