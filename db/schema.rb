# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_19_184359) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ancestries", force: :cascade do |t|
    t.string "name"
    t.integer "hit_points"
    t.string "size"
    t.integer "speed"
    t.string "vision"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ancestry_heritages", force: :cascade do |t|
    t.bigint "ancestry_id", null: false
    t.bigint "heritage_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ancestry_id"], name: "index_ancestry_heritages_on_ancestry_id"
    t.index ["heritage_id"], name: "index_ancestry_heritages_on_heritage_id"
  end

  create_table "characters", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "feats", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.integer "level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "heritages", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "level_feats", force: :cascade do |t|
    t.bigint "level_id", null: false
    t.bigint "feats_id", null: false
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feats_id"], name: "index_level_feats_on_feats_id"
    t.index ["level_id"], name: "index_level_feats_on_level_id"
  end

  create_table "levels", force: :cascade do |t|
    t.bigint "version_id", null: false
    t.integer "level_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["version_id"], name: "index_levels_on_version_id"
  end

  create_table "sources", force: :cascade do |t|
    t.string "name"
    t.string "source_type"
    t.date "release_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "traits", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "version_ancestries", force: :cascade do |t|
    t.bigint "version_id", null: false
    t.bigint "ancestry_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ancestry_id"], name: "index_version_ancestries_on_ancestry_id"
    t.index ["version_id"], name: "index_version_ancestries_on_version_id"
  end

  create_table "version_heritages", force: :cascade do |t|
    t.bigint "version_id", null: false
    t.bigint "heritage_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["heritage_id"], name: "index_version_heritages_on_heritage_id"
    t.index ["version_id"], name: "index_version_heritages_on_version_id"
  end

  create_table "versions", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.integer "rank"
    t.string "name"
    t.string "size"
    t.string "alignment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_versions_on_character_id"
  end

  add_foreign_key "ancestry_heritages", "ancestries"
  add_foreign_key "ancestry_heritages", "heritages"
  add_foreign_key "characters", "users"
  add_foreign_key "level_feats", "feats", column: "feats_id"
  add_foreign_key "level_feats", "levels"
  add_foreign_key "levels", "versions"
  add_foreign_key "version_ancestries", "ancestries"
  add_foreign_key "version_ancestries", "versions"
  add_foreign_key "version_heritages", "heritages"
  add_foreign_key "version_heritages", "versions"
  add_foreign_key "versions", "characters"
end
