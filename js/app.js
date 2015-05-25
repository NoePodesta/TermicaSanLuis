/**
 * Created by NoePodesta on 8/26/14.
 */
angular.module('termica', ['ui.bootstrap'])

    .controller('homeController', ['$scope', function (scope) {
        scope.slides =
            [
            {
                image: '../images/index/Banner/BENEF-DE-AISLAR1.jpg',
                text: 'imagen de ...',
                link: 'beneficios-de-aislar.html'
            },
            {
                image: '../images/index/Banner/FOTO-FABRICA1.jpg',
                text: 'imagen de ...'
            },
            {
                image: '../images/index/Banner/FOTO-FABRICA2.jpg',
                text: 'imagen de ...'
            },
            {
                image: '../images/index/Banner/FOTO-FABRICA3.jpg',
                text: 'imagen de ...'
            },
            {
                image: '../images/index/Banner/FOTO-FABRICA4.jpg',
                text: 'imagen de ...'
            },
            {
                image: '../images/index/Banner/FOTO-FABRICA5.jpg',
                text: 'imagen de ...'
            },
            {
                image: '../images/index/Banner/FOTO-FABRICA6.jpg',
                text: 'imagen de ...'
            },
            {
                image: '../images/index/Banner/FOTO-FABRICA7.jpg',
                text: 'imagen de ...'
            },
            {
                image: '../images/index/Banner/NEWS.jpg',
                text: 'imagen de ...',
                link: 'noticias.html'
            }
        ];

        scope.myInterval = 2500;




    }])

    .controller('contactController', function () {

        loadMap();

        function loadMap (){


            var elementMapSL = document.getElementById('map_fa_SL');
            var mapSLOptions = {
                center: new google.maps.LatLng(-33.31427, -66.372290),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var mapSL = new google.maps.Map(elementMapSL, mapSLOptions);

            var markerSL = new google.maps.Marker({
                map: mapSL,
                position: new google.maps.LatLng(-33.31427, -66.372290)
            });

            google.maps.event.trigger(mapSL, 'resize');

            var elementMapSM = document.getElementById('map_of_SM');
            var mapSMOptions = {
                center: new google.maps.LatLng(-34.520138, -58.718769),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var mapSM = new google.maps.Map(elementMapSM, mapSMOptions);

            var markerSM = new google.maps.Marker({
                map: mapSM,
                position: new google.maps.LatLng(-34.520138, -58.718769)
            });

            google.maps.event.trigger(mapSM, 'resize');

            var elementMapBA = document.getElementById('map_of_BA');
            var mapBAOptions = {
                center: new google.maps.LatLng(-34.578340, -58.457937),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var mapBA = new google.maps.Map(elementMapBA, mapBAOptions);

            var markerBA = new google.maps.Marker({
                map: mapBA,
                position: new google.maps.LatLng(-34.578340, -58.457937)
            });

            google.maps.event.trigger(mapBA, 'resize');

        }
    })

    .controller('Product', ['$scope', function (scope) {
        scope.status = {
            isFirstOpen: true,
            isSecondOpen: true
        };

    }])

    .directive('anchorScroll', function () {

        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.on('click', function (event) {
                    event.preventDefault();

                    var id = '#' + attr.epiAnchorScroll;
                    var selector = angular.element(document.querySelectorAll(id));

                    var startY = currentYPosition();
                    var stopY = elmYPosition(selector);
                    var distance = stopY > startY ? stopY - startY : startY - stopY;
                    if (distance < 100) {
                        scrollTo(0, stopY);
                    } else {
                        var speed = Math.round(distance / 20);
                        if (speed >= 20) speed = 20;
                        var step = Math.round(distance / 25);
                        var leapY = stopY > startY ? startY + step : startY - step;
                        var timer = 0;
                        if (stopY > startY) {
                            for (var i = startY; i < stopY; i += step) {
                                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                                leapY += step;
                                if (leapY > stopY) leapY = stopY;
                                timer++;
                            }
                        } else {
                            for (var j = startY; j > stopY; j -= step) {
                                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                                leapY -= step;
                                if (leapY < stopY) leapY = stopY;
                                timer++;
                            }
                        }
                    }

                    function currentYPosition() {
                        // Firefox, Chrome, Opera, Safari
                        if (self.pageYOffset) return self.pageYOffset;
                        // Internet Explorer 6 - standards mode
                        if (document.documentElement && document.documentElement.scrollTop)
                            return document.documentElement.scrollTop;
                        // Internet Explorer 6, 7 and 8
                        if (document.body.scrollTop) return document.body.scrollTop;
                        return 0;
                    }

                    function elmYPosition(eID) {
                        var elm = document.getElementById(attr.anchorScroll);
                        var y = elm.offsetTop;
                        var node = elm;
                        while (node.offsetParent && node.offsetParent != document.body) {
                            node = node.offsetParent;
                            y += node.offsetTop;
                        }
                        return y;
                    }

                });
            }
        }
    })

    .directive('aislacionesTermicasMenu', function () {

        return {
            restrict: 'A',
            scope: {
                active: '@'
            },
            link: function (scope, element, attr) {

            },
            template: 'div>' +
                'accordion>' +
                '<accordion-group  is-open="status.open">' +
                '<accordion-heading>' +
                '<p>Frio <i class="pull-right glyphicon"></i></p>' +
                '</accordion-heading>' +
                '<a href="poliestireno.html">Poliestireno (EPS) <i class="fa fa-angle-down icon-menu"></i></a>' +
                '<a href="poliuretano.html">Poliuretano (PUR) <i class="fa fa-angle-down icon-menu"></i></a>' +
                '<a>Poliisocianato (PIR)</a>' +
                '<a>Foam Glass</a>' +
                '</accordion-group>' +
                '</accordion>' +
                '<accordion>' +
                '<accordion-group  is-open="status.open">' +
                '<accordion-heading>' +
                '<p>Calor <i class="pull-right glyphicon"></i></p>' +
                '</accordion-heading>' +
                '<a href="poliestireno.html">Lana Mineral <i class="fa fa-angle-down icon-menu"></i></a>' +
                '</accordion-group>' +
                '</accordion>' +
                '</div>'

        }
    });





