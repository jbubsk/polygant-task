System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.16",
    "angular-animate": "github:angular/bower-angular-animate@1.3.16",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "babel": "npm:babel-core@5.6.15",
    "babel-runtime": "npm:babel-runtime@5.6.15",
    "bootstrap-sass": "github:twbs/bootstrap-sass@3.3.5",
    "bootstrap-slider": "github:seiyria/bootstrap-slider@4.10.1",
    "core-js": "npm:core-js@0.9.18",
    "foundation-css": "github:zurb/foundation@5.5.2",
    "jquery": "github:components/jquery@2.1.4",
    "json": "github:systemjs/plugin-json@0.1.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "masked.input": "./vendors/masked.input",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.3.16"
    },
    "github:angular/bower-angular-animate@1.3.16": {
      "angular": "github:angular/bower-angular@1.3.16"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:seiyria/bootstrap-slider@4.10.1": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:babel-runtime@5.6.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

