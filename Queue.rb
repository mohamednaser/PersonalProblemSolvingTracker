# frozen_string_literal: true

# Start with your code from LinkedList challenge.

class Queue
  @custom_queue

  def initialize
    @custom_queue = []
  end

  def add(number)
    @custom_queue.push(number)
  end

  def remove
    return -1 if @custom_queue.first.nil?

    @custom_queue.first
    @custom_queue.shift
  end
end

queue = Queue.new

queue.add(3)
queue.add(5)
puts queue.remove
# => 3

queue.add(2)
queue.add(7)
puts queue.remove
# => 5

puts queue.remove
# => 2

puts queue.remove
# => 7

puts queue.remove
# => -1
