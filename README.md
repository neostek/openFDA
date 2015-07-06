# NEOSTEK™ Open FDA API Theorectical Sequencing Demo

NEOSTEK™ is pleased to submit it's prototype of the Open FDA API for Development pool (pool two).

## Live Prototype
[Demo](https://openfda.neostek.com) is hosted on an Amazon Web Service (AWS) EC2 Linux instance and operated in accordance with AWS terms of services <http://aws.amazon.com/legal/>

# Contents

This repository contains the main openfda.neostek.com website:

# Development and DevOps Stack

* [Zurb Foundation Apps](http://getbootstrap.com/) - Defacto standard for mobile-first framework and UI
* [AngularJs](https://angularjs.org/) - JavaScript based Single Page Application(s) Javascript Framework
* [D3JS] (http://d3js.org/) - Data visualization
* [Gulp](http://gulpjs.com/) - Build / Configuration tool for Javascript application stacks
* [Docker](https://www.docker.com/) - For Running our Docker Image
* [Angular Plasmid]() - Angular Plasmid is a plasmid visualization component using AngularJS and SVG.

# Building from source

Install bundler , bower, FoundationApps and gulp:

```bash
npm install -g grunt-cli foundation-cli bundler bower gulp
gem install bundler
cd /path/to/this/repo
```

Get Foundation Apps watching for any changes to assets:

```bash
foundation-apps watch
```

# Prerequisites

* Node 0.10.*
* Zurb Foundation Apps 1.*