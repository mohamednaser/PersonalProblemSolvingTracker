# frozen_string_literal: true

def parliamentParties(votes)
  # Write your code here
  personsWithVotes = {}
  passedPersons = []
  votesNumber = votes.length

  votes.each do |item|
    personsWithVotes[item] = if personsWithVotes[item]
                               personsWithVotes[item] + 1
                             else
                               personsWithVotes[item] = 1
                             end
  end

  personsWithVotes.each do |person|
    personPercentage = (person[1] * 100) / votesNumber
    passedPersons.push(person[0]) if personPercentage >= 5
  end

  passedPersons.sort
end

testData = %w[
  Republican
  Democratic
  Republican
  Democratic
  Republican
  Democratic
  Republican
  Democratic
  Republican
  Democratic
  Republican
  Democratic
  Republican
  Democratic
  Republican
  Democratic
  Republican
  Democratic
  Republican
  Libertarian
]
puts parliamentParties(testData)
