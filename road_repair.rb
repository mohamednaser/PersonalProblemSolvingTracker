# frozen_string_literal: true

def getMinCost(employee_id, job_id)
  totalDistance = 0
  sorted_employess = employee_id.sort
  sortedJobs = job_id.sort
  sorted_employess.each_with_index do |val, index|
    curentJob = sortedJobs[index]
    totalDistance += val > curentJob ? val - curentJob : curentJob - val
    # totalDistance += curentJob - val
    # results.push(val + 'with job' + jobs[index])
  end
  totalDistance
end

employe_Array = [5, 3, 1, 4, 6]
jobs_array = [9, 8, 3, 15, 1]

# employe_Array = [5, 9, 4, 3, 8, 2]
# jobs_array = [9, 8, 1, 10, 1, 4]

puts getMinCost(employe_Array, jobs_array)
