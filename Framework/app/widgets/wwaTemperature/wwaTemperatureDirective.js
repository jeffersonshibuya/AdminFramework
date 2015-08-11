"use strict";

angular.module('app').directive('wwaTemperature',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'app/widgets/wwaTemperature/wwaTemperatureTemplate.html',
            link: function (scope, el, attrs) {
                scope.selectedLocation = null;
                scope.isLoaded = false;
                scope.hasError = false;

                scope.loadLocation = function () {
                    scope.hasError = false;
                    dataService.getLocation(scope.item.widgetSettings.id)
                        .then(function (data) {
                            scope.selectedLocation = data;
                            scope.isLoaded = true;
                            scope.hasError = false;
                        }, function (error) {
                            scope.hasError = true;
                            scope.error = error;
                        });
                };

                scope.loadLocation();
            }
        };
    }]);