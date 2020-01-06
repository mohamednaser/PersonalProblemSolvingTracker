# frozen_string_literal: true

# Start with your code from last challenge.
class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

# linkedlist class
class LinkedList
  attr_accessor :head, :tail

  def initialize
    @head = nil
    @tail = nil
  end

  def add(number)
    new_node = Node.new(number)
    if @head.nil?
      @head = new_node
      @tail = new_node
    else
      @tail.next_node = new_node
      @tail = new_node
    end
  end

  def get(index)
    current_node = @head

    while index > 0 && current_node
      current_node = current_node.next_node
      index -= 1
    end

    current_node.value
  end

  def add_at(index, item)
    current_node = @head

    while index > 0 && current_node
      current_node = current_node.next_node
      index -= 1
    end

    new_node_obj = Node.new(item, current_node.next_node)

    current_node.next_node = new_node_obj
  end
end

list = LinkedList.new

list.add(3)
list.add(5)
abort(list)

list.add_at(1, 11)
list.add_at(0, 13)

puts list.get(2)
# => 11

puts list.get(3)
# => 5
