// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the area of a parallelogram.
 */
function calculateAreaOfParallelogram () {
  // input
  const baseOfParallelogram = parseFloat(document.getElementById('base-of-parallelogram').value)
  const heightOfParallelogram = parseFloat(document.getElementById('height-of-parallelogram').value)

  // process
  const areaOfParallelogram = baseOfParallelogram * heightOfParallelogram

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfParallelogram + ' cm²'
}
