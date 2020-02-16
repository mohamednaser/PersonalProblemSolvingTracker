# frozen_string_literal: true

def happyLadybugs(b)
  unhappyCounter = 0
  spacesCount = 0
  array = b.split('')
  array.sort!

  (0...array.size).each do |index|
    if array[index] == '_'
      spacesCount += 1
      next
    end
    # puts "#{array[index]}  #{array[index + 1]}  #{array[index - 1]}"
    if array[index + 1] != array[index] && array[index - 1] != array[index]
      unhappyCounter = unhappyCounter + 1
    end
  end
  # return unhappyCounter
  if(spacesCount == 0 && unhappyCounter != 0)
      return 'NO'
  end

  unhappyCounter > 0 ? 'NO' : 'YES'
end

# expected yes 
# puts happyLadybugs('_')
# puts happyLadybugs('RRRR')


# expected NO 
# puts happyLadybugs('RBRB')


# puts happyLadybugs('BBCAA')  
# puts happyLadybugs('AABBC_C')
# puts happyLadybugs('DD__FQ_QQF')
# puts happyLadybugs('DAABCBCD__FQ_QQF')
# puts happyLadybugs('AABCBC')
# puts happyLadybugs('_')
# puts happyLadybugs('_')
# puts happyLadybugs('_')
# puts happyLadybugs('_')






