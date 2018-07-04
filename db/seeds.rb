# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#require_relative 'videos/seeds'
#Seeds::WebhookConfig.seed
def list_videos (dir)
  dirname = dir
  p "inside #{dirname}"
  Dir.glob('*').select do |f|

  end
end

def scan_dir(dir, &block)
  Dir.chdir(dir) do
    Dir.glob('*').select do |f|
     block.call
    end
  end
end

#l = lambda { list_videos(f) if File.directory? f  }
scan_dir(ENV['VIDEO_DIR']) { list_videos(f) if File.directory? f  }




