# frozen_string_literal: true

def bonAppetit(bill, k, b)
  totalSharedCost = 0

  (0...bill.size).each do |i|
    totalSharedCost += bill[i] if k != i
  end

  banShouldPay = b - (totalSharedCost / 2)

  return 'Bon Appetit' if banShouldPay == 0

  banShouldPay
end

p bonAppetit([3, 10, 2, 9], 1, 12)
p bonAppetit([3, 10, 2, 9], 1, 7)
