# RBSD Portfolio

A working prototype of the [MGS_Sync website](http://www.mgcsync.com/). The previous iteration of the site was built with static pages. 

As the school continues to grow and the design updates, the current complexity of the site would harm rather than help the next generation of students building the site.

## Configuration

```
  _config.yml
  Gemfile
  GemLock
  Readme
  src
    - _includes
    - _layouts
    - _sass
  assets
    - js
    - images
    main.scss
  data
    - data.yml
  students
    - student pages
  explore.html
  graduates.html
  index.html
```

## Built with:

• [Jekyll](http://jekyllrb.com/)

### Depenedencies

```
  ruby 2.3.7
  https://github.com/jekyll/jekyll/releases/tag/v3.8.5
```

### Setup (OS X)

1. Install XCode and the XCode command line tools.

From the Command Line:
1. Install [HomeBrew](https://brew.sh/)
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
2. Install the [Ruby Version Manager](https://rvm.io/)
```
$ \curl -sSL https://get.rvm.io | bash -s stable
```
3. Install the Jekyll Command Line tool

```
$ gem install bundler jekyll
```

4. Change into the directory that the application is in and run the following command:

```
$ bundle exec jekyll serve --watch
```

This will start a Jekyll server running on port 4000 with the built application set up for you use. Feel free to add pages, customize the app as needed.

### Setup (Windows)

• Todo