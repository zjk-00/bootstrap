#!/usr/bin/env node

/*!
 * Script to generate SRI hashes for use in our docs.
 * Copyright 2017 The Bootstrap Authors
 * Copyright 2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

'use strict'

const sriToolbox = require('sri-toolbox')

const files = [
  'dist/css/bootstrap.min.css',
  'dist/js/bootstrap.min.js',
  'assets/js/vendor/jquery-slim.min.js',
  'assets/js/vendor/popper.min.js'
]

files.forEach((file) => {
  const integrity = sriToolbox.generate({
    algorithms: ['sha384']
  }, file)

  console.log(`${file}: ${integrity}`)
})
