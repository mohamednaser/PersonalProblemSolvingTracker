# frozen_string_literal: true

def stones(n, a, _b)
  (n).times do |index|
    suma = 0
    sumb = 0

    (n - index).times do
      suma << suma + a
     end
    # (n - index)
    suma

  end


end

# stones(3 , 1 , 2)
puts stones(4, 10, 100)

# 0, 10, 20, 30        a + a + a  => 3a + 0b
# 0, 10, 20, 120       a + a + b  => 2a + 1b
# 0, 10, 110, 120      a + b + b  => 1a + 2b
# 0, 10, 110, 210
# 0, 100, 110, 120
# 0, 100, 110, 210
# 0, 100, 200, 210
# 0, 100, 200, 300
