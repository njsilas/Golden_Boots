class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :nat
      t.string :pos
      t.belongs_to :team
      t.timestamps
    end
  end
end
