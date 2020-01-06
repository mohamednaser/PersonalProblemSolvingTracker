# frozen_string_literal: true

def pickingNumbers(a)
  counter = 1
  max_counter = 0
  a.sort!
  index = a[0]

  (0..a.size).each do |i|
    next if a[i + 1].nil?

    checker = (a[i + 1] - index).abs
    if checker <= 1
      counter += 1
    else
      index = a[i + 1]
      max_counter = counter if counter > max_counter
      counter = 1
    end
  end

  max_counter = counter if counter > 1 && max_counter == 0
  max_counter
  
end

puts pickingNumbers([1, 2, 2, 3, 1, 2])
puts pickingNumbers([4, 6, 5, 3, 3, 1])
puts pickingNumbers([1, 1, 1, 1, 1, 1])
