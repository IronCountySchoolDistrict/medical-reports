/*global $j*/
(function() {
    'use strict';
    var template = $j($j('#template').html());
    var select = $j('tr').eq(-1);
    template.insertAfter(select);
}());