# frozen_string_literal: true

class Stack
  @custom_stack
  def initialize
    @custom_stack = []
  end

  def push(number)
    @custom_stack.push(number)
  end

  def pop
    @custom_stack.pop
    end

  def min
    @custom_stack.min
  end
end

stack = Stack.new
stack.push(3)
stack.push(5)
puts stack.min
# => 3

stack.pop
stack.push(7)
puts stack.min
# => 3

stack.push(2)
puts stack.min
# => 2

stack.pop
puts stack.min
# => 3
