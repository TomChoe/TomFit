user = User.new
user.email = 'tomtom'
user.password = '123456'
user.password_confirmation = '123456'
user.name = 'tom choe'
user.age = 37
user.weight = 200
user.height = '5ft 8'
user.save

workoutlog = Workoutlog.new
workoutlog.user_id = 1
workoutlog.exercise = 'deadlift'
workoutlog.difficulty = 4
workoutlog.duration = 30
workoutlog.save