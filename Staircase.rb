# frozen_string_literal: true

def staircase(n)
  (1..n).each do |a|
    a.times do
      print '*'
    end
    puts ''
  end
end

staircase(5)
