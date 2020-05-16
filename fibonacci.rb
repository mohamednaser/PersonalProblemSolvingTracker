
def fibonacci(n)
    (1..n).inject {|product, n| product * n }
end



print fibonacci(5)
