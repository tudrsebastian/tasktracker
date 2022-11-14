v$LOAD_PATH << File.expand_path('lib', __dir__)
require 'scss_lint/constants'
require 'scss_lint/version'

Gem::Specification.new do |s|
  s.name             = 'scss_lint'
  s.version          = SCSSLint::VERSION
  s.license          = 'MIT'
  s.summary          = 'SCSS lint tool'
  s.description      = 'Configurable tool for writing clean and consistent SCSS'
  s.authors          = ['Shane da Silva']
  s.email            = ['shane@dasilva.io']
  s.homepage         = SCSSLint::REPO_URL

  s.require_paths    = ['lib']

  s.executables      = ['scss-lint']

  s.files            = Dir['config/**/*.yml'] +
                       Dir['data/**/*'] +
                       Dir['lib/**/*.rb'] +
                       ['MIT-LICENSE']

  s.test_files       = Dir['spec/**/*']

  s.required_ruby_version = '>= 2.4'

  s.add_dependency 'sass', '~> 3.5', '>= 3.5.5'
end