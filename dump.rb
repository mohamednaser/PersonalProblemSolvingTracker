# frozen_string_literal: true

def balanced_brackets?(string)
  stack = []

  start_tags = ['{', '[', '(']
  end_tags = ['}', ']', ')']
  all_tags = start_tags + end_tags

  string.chars do |charcter|
    next unless all_tags.include?(charcter)

    if start_tags.include?(charcter)
      stack.push(charcter)
    else
      if end_tags.index(charcter) == start_tags.index(stack.last)
        stack.pop
      else
        return false
      end
    end
  end
  stack.empty?
end

puts balanced_brackets?('(hello)[world]')
# # => true

puts balanced_brackets?('([)]')
# => false

puts balanced_brackets?('[({}{}{})([])]')
# => true

puts balanced_brackets?('[([)])]')
# => false

