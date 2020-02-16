# frozen_string_literal: true

def sliding_maximum(k, array)
  array.each_cons(k).map(&:max)
end
 