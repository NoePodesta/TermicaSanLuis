/**
 * Created by NoePodesta on 8/26/14.
 */
angular.module('store', ['ui.bootstrap'])

.controller('StoreController', ['$scope', function(scope){
        scope.slides = slides;
        scope.myInterval = 2500;
//        initialize();

        function initialize() {
            var elementMapSL = document.getElementById('map_fa_SL');
            var mapSLOptions = {
                center: new google.maps.LatLng(44.5403, -78.5463),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var mapSL = new google.maps.Map(elementMapSL,mapSLOptions);

            var elementMapSM = document.getElementById('map_of_SM');
            var mapSMOptions = {
                center: new google.maps.LatLng(44.5403, -78.5463),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var mapSM = new google.maps.Map(elementMapSM,mapSMOptions);

            var elementMapBA = document.getElementById('map_of_BA');
            var mapBAOptions = {
                center: new google.maps.LatLng(44.5403, -78.5463),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var mapBA = new google.maps.Map(elementMapBA,mapBAOptions);
        }
}])

.controller('Products', ['$scope', function(scope){

        scope.openMenu = function(){
            alert("hola");

        }

}]);


var slides = [
    {
        image: '../images/index/Banner/BENEF-DE-AISLAR1.jpg' ,
        text: 'imagen de ...'
    },
    {
        image: '../images/index/Banner/FOTO-FABRICA1.jpg' ,
        text: 'imagen de ...'
    },
    {
        image: '../images/index/Banner/FOTO-FABRICA2.jpg' ,
        text: 'imagen de ...'
    },
    {
        image: '../images/index/Banner/FOTO-FABRICA3.jpg' ,
        text: 'imagen de ...'
    },
    {
        image: '../images/index/Banner/FOTO-FABRICA4.jpg' ,
        text: 'imagen de ...'
    },
    {
        image: '../images/index/Banner/FOTO-FABRICA5.jpg' ,
        text: 'imagen de ...'
    },                                                  {
        image: '../images/index/Banner/FOTO-FABRICA6.jpg' ,
        text: 'imagen de ...'
    },                                                  {
        image: '../images/index/Banner/FOTO-FABRICA7.jpg' ,
        text: 'imagen de ...'
    },
    {
        image: '../images/index/Banner/NEWS.jpg' ,
        text: 'imagen de ...'
    }
];


