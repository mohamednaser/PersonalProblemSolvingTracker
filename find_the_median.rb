# frozen_string_literal: true

def findMedian(arr)
  return false if arr.size.even?

  arr.sort!

  p arr[(arr.size/2).floor]
end

findMedian([9, 7, 1, 2, 3, 4, 5]) # expected result is 4 
