module.exports = function (grunt) {

	// Configure task(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			global: {
				files: {
				  "js/main.min.js": ["js/main.js"]
				}
      		}
		},
		sass: {
			global: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/main.css': '_sass/main.scss'
				}
			}
		},
		watch: {
			js: {
				files: ['js/*.js'],
				tasks: ['uglify', 'shell:jekyllBuild']
			},
			css: {
				files: ['_sass/*.scss'],
				tasks: ['sass', 'shell:jekyllBuild']
			},
			site: {
				files: ["index.html", "blog.html", "portfolio.html", "_layouts/*.html", "_posts/*.md", "_projects/*.md", "_includes/*.html", "_portfolio/*.html"],
				tasks: ["shell:jekyllBuild"]
			  },
			options : {
				livereload : true
			}
		},
		imagemin: {
			files: {
				'img/*.png': 'img/*.png',
				'img/*.jpg': 'img/*.jpg',
				'img/*.gif': 'img/*.gif'
			}
		},
		jekyll: {
			server: {
				src: 'templates',
				dest: 'dev',
				server: true,
				server_port: 8000,
				auto: true
			},
			dev: {
				src: 'templates',
				dest: 'dev'
			},
			prod: {
				src: 'templates',
				dest: 'prod'
			}
		},
		shell : {
			jekyllBuild: {
				command: "jekyll build --config _config-dev.yml"
			},
			jekyllServe: {
        		command: "jekyll serve --baseurl="
      		}
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-shell');

	// Register task(s)
	grunt.registerTask('default', ['uglify', 'sass', 'imagemin', 'shell:jekyllBuild', 'watch']);
	grunt.registerTask("serve", ["shell:jekyllServe"]);
}