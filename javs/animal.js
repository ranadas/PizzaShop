/**
 * Created by rdas on 24/08/2016.
 */
'use strict';

var Animal = function () {
    this.name = "";
    this.legs = 0;

    this.feed = function (food) {
        console.log(this.name + " is being feed " + food);
    };
};