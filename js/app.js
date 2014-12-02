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


        (function($){
            $(window).load(function(){

                /* Page Scroll to id fn call */
                $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
                    highlightSelector:"#navigation-menu a"
                });

                /* demo functions */
                $("a[rel='next']").click(function(e){
                    e.preventDefault();
                    var to=$(this).parent().parent("section").next().attr("id");
                    $.mPageScroll2id("scrollTo",to);
                });

            });
        })();
}])

.controller('Products', ['$scope', function(scope){
        (function($){
            $(window).load(function(){

                /* Page Scroll to id fn call */
                $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
                    highlightSelector:"#navigation-menu a"
                });

                /* demo functions */
                $("a[rel='next']").click(function(e){
                    e.preventDefault();
                    var to=$(this).parent().parent("section").next().attr("id");
                    $.mPageScroll2id("scrollTo",to);
                });

            });
        })(jQuery);


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


