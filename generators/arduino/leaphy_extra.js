/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Leaphy RGB.
 */
'use strict';

goog.provide('Blockly.Arduino.LeaphyExtra');

goog.require('Blockly.Arduino');

var includeDefinition = '#include "Adafruit_TCS34725.h"';
var variablesDefinition = 'Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_24MS, TCS34725_GAIN_16X);\nuint16_t RawColor_Red, RawColor_Green, RawColor_Blue, RawColor_Clear;\nbyte Color_Red, Color_Green, Color_Blue, Color_Clear;';

Blockly.Arduino['leaphy_rgb_read_sensor'] = function (block){
    Blockly.Arduino.definitions_['define_leaphy_rgb'] = includeDefinition;
    Blockly.Arduino.definitions_['define_leaphy_rgb_var'] = variablesDefinition;
    var code = 'if (tcs.begin()) {\n  Serial.println("RGB-sensor gevonden!");\n} else {\n  Serial.println("Geen RGB-sensor gevonden... check je verbindingen...");\n}\ntcs.getRawData(&RawColor_Red, &RawColor_Green, &RawColor_Blue, &RawColor_Clear);\nColor_Red = min(RawColor_Red/5,255); Color_Green = min(RawColor_Green/5,255); Color_Blue = min(RawColor_Blue/5,255);\n';
    return code;
};

Blockly.Arduino['leaphy_rgb_color_red'] = function (block){
    Blockly.Arduino.definitions_['define_leaphy_rgb'] = includeDefinition;
    Blockly.Arduino.definitions_['define_leaphy_rgb_var'] = variablesDefinition;
    var code = 'Color_Red';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['leaphy_rgb_color_green'] = function (block){
    Blockly.Arduino.definitions_['define_leaphy_rgb'] = includeDefinition;
    Blockly.Arduino.definitions_['define_leaphy_rgb_var'] = variablesDefinition;
    var code = 'Color_Green';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['leaphy_rgb_color_blue'] = function (block){
    Blockly.Arduino.definitions_['define_leaphy_rgb'] = includeDefinition;
    Blockly.Arduino.definitions_['define_leaphy_rgb_var'] = variablesDefinition;
    var code = 'Color_Blue';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['leaphy_rgb_raw_color_red'] = function (block){
    Blockly.Arduino.definitions_['define_leaphy_rgb'] = includeDefinition;
    Blockly.Arduino.definitions_['define_leaphy_rgb_var'] = variablesDefinition;
    var code = 'RawColor_Red';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['leaphy_rgb_raw_color_green'] = function (block){
    Blockly.Arduino.definitions_['define_leaphy_rgb'] = includeDefinition;
    Blockly.Arduino.definitions_['define_leaphy_rgb_var'] = variablesDefinition;
    var code = 'RawColor_Green';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['leaphy_rgb_raw_color_blue'] = function (block){
    Blockly.Arduino.definitions_['define_leaphy_rgb'] = includeDefinition;
    Blockly.Arduino.definitions_['define_leaphy_rgb_var'] = variablesDefinition;
    var code = 'RawColor_Blue';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['leaphy_led_set_strip'] = function (block){
    var pin = Blockly.Arduino.valueToCode(this, 'LED_SET_PIN', Blockly.Arduino.ORDER_ATOMIC) || '0'
    var leds = Blockly.Arduino.valueToCode(this, 'LED_SET_LEDS', Blockly.Arduino.ORDER_ATOMIC) || '0'
    Blockly.Arduino.definitions_['define_led_lib'] = '#include "ledstrip.h"';
    Blockly.Arduino.definitions_['define_leds_pins'] = 'LEDSTRIP ledstrip(' + pin + ', ' + leds + ');';
    var code = '';
    return code;
};

Blockly.Arduino['leaphy_led_set_basic'] = function (block){
    var led = Blockly.Arduino.valueToCode(this, 'LED_BASIC_LED', Blockly.Arduino.ORDER_ATOMIC) || '0'    
    var red = Blockly.Arduino.valueToCode(this, 'LED_BASIC_RED', Blockly.Arduino.ORDER_ATOMIC) || '0'
    var green = Blockly.Arduino.valueToCode(this, 'LED_BASIC_GREEN', Blockly.Arduino.ORDER_ATOMIC) || '0'
    var blue = Blockly.Arduino.valueToCode(this, 'LED_BASIC_BLUE', Blockly.Arduino.ORDER_ATOMIC) || '0'
    var code = 'ledstrip.basis('+ led + ', ' + red + ', ' + green + ', ' + blue + ');\n';
    return code;
};

Blockly.Arduino['leaphy_led_set_speed'] = function (block){
    var speedValue = Blockly.Arduino.valueToCode(this, 'LED_SET_SPEEDVALUE', Blockly.Arduino.ORDER_ATOMIC) || '0'
    var code = '_snelHeid = ' + speedValue + ';\n';
    return code;
};

Blockly.Arduino['leaphy_led_strip_demo'] = function (block){
    var dropdownType = block.getFieldValue('DEMO_TYPE');
    var red = Blockly.Arduino.valueToCode(this, 'LED_STRIP_DEMO_RED', Blockly.Arduino.ORDER_ATOMIC) || '0'
    var green = Blockly.Arduino.valueToCode(this, 'LED_STRIP_DEMO_GREEN', Blockly.Arduino.ORDER_ATOMIC) || '0'
    var blue = Blockly.Arduino.valueToCode(this, 'LED_STRIP_DEMO_BLUE', Blockly.Arduino.ORDER_ATOMIC) || '0'
    var code = 'ledstrip.runFunction(' + dropdownType + ', ' + red + ', ' + green + ', ' + blue + ');\n';
    return code;
};
