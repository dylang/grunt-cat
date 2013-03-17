# grunt-cat

> Cat a file to the terminal. Works great with text, ascii art, and even colorful ansi.

This task may require `Grunt 0.4`.

## Getting Started

```bash
npm install grunt-cat --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-cat');
```

## Cat a file

### The notify MutiTask
Show a message whenever you want!

```js
grunt.initConfig({
  cat: {
    logo: {
      file: 'files/logo.txt'
    },
    prod: {
      file: 'files/prod-logo.txt'
    }
  }
});

grunt.loadNpmTasks('grunt-cat');

// simplified example
grunt.registerTask('server', ['cat:logo', 'uglify', 'sass', 'server', 'notify:server']);
```

[![Watch example](https://github.com/dylang/grunt-cat/raw/master/screenshots/doodleordie.png)](https://github.com/dylang/grunt-cat)

### Options
* `file` (_required_): Path to the file. This is relative to the root of your project.

## Tests
Run `grunt` to lint and run the tests.

## Doodle or Die
This project was created for and is used by [Doodle or Die](http://doodleOrDie.com).

This is what it looks like when we run our local dev server using the production MongoDB:

[![Doodle or Die example](https://github.com/dylang/grunt-cat/raw/master/screenshots/doodleordie-prod.png)](http://doodleOrDie.com)

## Release History
Dec 28 - First version
