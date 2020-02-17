# frozen_string_literal: true

def balanced_brackets?(string)
  opened_symbols_stack = []
  opened_symbols = ['[', '{', '(']
  close_symbols = [']', '}', ')']

  string.chars do |element|
    if opened_symbols.include? element
      opened_symbols_stack << element
    else
      # continue and skip normal charcters
      next unless close_symbols.include? element
      # we can check with index but i have no time now :(
      if check_close_tag(opened_symbols_stack.last, element)
        opened_symbols_stack.pop
      else
        # puts "close #{element} last item is #{opened_symbols_stack.last} and array #{opened_symbols_stack}"

        return false
      end
    end
  end

  opened_symbols_stack.empty? ? true : false
end

def check_close_tag(open_tag, close_tag)
  return true if open_tag == '{' && close_tag == '}'
  return true if open_tag == '[' && close_tag == ']'
  return true if open_tag == '(' && close_tag == ')'

  false
end

puts balanced_brackets?('(hello)[world]')
# # => true

puts balanced_brackets?('([)]')
# => false

puts balanced_brackets?('[({}{}{})([])]')
# => true
