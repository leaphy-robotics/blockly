/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview All the blocks.  (Entry point for blocks_compressed.js.)
 * @suppress {extraRequire}
 */
'use strict';

goog.module('Blockly.libraryBlocks');

const colour = goog.require('Blockly.libraryBlocks.colour');
const lists = goog.require('Blockly.libraryBlocks.lists');
const logic = goog.require('Blockly.libraryBlocks.logic');
const loops = goog.require('Blockly.libraryBlocks.loops');
const math = goog.require('Blockly.libraryBlocks.math');
const procedures = goog.require('Blockly.libraryBlocks.procedures');
const texts = goog.require('Blockly.libraryBlocks.texts');
const variables = goog.require('Blockly.libraryBlocks.variables');
const variablesDynamic = goog.require('Blockly.libraryBlocks.variablesDynamic');
const leaphyCommon = goog.require('Blockly.libraryBlocks.leaphyCommon');
const leaphyOriginal = goog.require('Blockly.libraryBlocks.leaphyOriginal');
const leaphyNano = goog.require('Blockly.libraryBlocks.leaphyNano');
const leaphyFlitz = goog.require('Blockly.libraryBlocks.leaphyFlitz');
const leaphyClick = goog.require('Blockly.libraryBlocks.leaphyClick');
const leaphyExtra = goog.require('Blockly.libraryBlocks.leaphyExtra');
const arduino = goog.require('Blockly.libraryBlocks.arduino');
// const {BlockDefinition} = goog.requireType('Blockly.blocks');
// TODO (6248): Properly import the BlockDefinition type.
/* eslint-disable-next-line no-unused-vars */
const BlockDefinition = Object;


exports.colour = colour;
exports.lists = lists;
exports.logic = logic;
exports.loops = loops;
exports.math = math;
exports.procedures = procedures;
exports.texts = texts;
exports.variables = variables;
exports.variablesDynamic = variablesDynamic;
exports.leaphyCommon = leaphyCommon;
exports.leaphyOriginal = leaphyOriginal;
exports.leaphyNano = leaphyNano;
exports.leaphyFlitz = leaphyFlitz;
exports.leaphyClick = leaphyClick;
exports.leaphyExtra = leaphyExtra;
exports.arduino = arduino;

/**
 * A dictionary of the block definitions provided by all the
 * Blockly.libraryBlocks.* modules.
 * @type {!Object<string, !BlockDefinition>}
 */
const blocks = Object.assign(
    {}, colour.blocks, lists.blocks, logic.blocks, loops.blocks, math.blocks,
    procedures.blocks, variables.blocks, variablesDynamic.blocks,
    leaphyCommon.blocks, leaphyOriginal.blocks, leaphyNano.blocks, leaphyFlitz.blocks,
    leaphyClick.blocks, leaphyExtra.blocks, arduino.blocks);
exports.blocks = blocks;
