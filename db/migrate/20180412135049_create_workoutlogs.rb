class CreateWorkoutlogs < ActiveRecord::Migration[5.1]
  def change
    create_table :workoutlogs do |t|
      t.integer :user_id
      t.string :exercise
   	  t.integer :difficulty
   	  t.integer :duration

      t.timestamps
    end
  end
end
