# NEOSTEK™ openFDA Demo

NEOSTEK openFDA Demo is a pilot project to brilliantly consume openFDA Drugs API via http://open.fda.gov against DNA sequencing representation via the AngularJS Plasmid.

*Please note that openFDA is a beta research project and not for clinical use. 

# Contents

This repository contains the main openfda.neostek.com website:

* A [Foundation Apps] (http://foundation.zurb.com/apps) mobile first site
* [Gulp](http://gruntjs.com/) is used for configuration management and building CSS (from LESS) and minified JS
* D3 Charting Libraries is a visual component using AngularJS and SVG
* Angular Plasmid is a plasmid visualization component using AngularJS and SVG.

# Running the site

Install bundler , bower, FoundationApps and gulp:

```bash
npm install -g grunt-cli bundler foundation-cli bower gulp
gem install bundler
cd /path/to/this/repo
bundle install
```

Get Grunt watching for any changes to assets:

```bash
foundation-apps watch
```

Get the site running at `http://localhost:3000` with:

# Prerequisites

* Node 0.10.*
* Python 2.* (because of [pygments](https://github.com/tmm1/pygments.rb) syntax highlighting)
