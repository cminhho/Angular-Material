app.controller('toolCtrl', function ($scope, $timeout, $mdSidenav, $log){
	var originatorEv;
	this.openMenu = function($mdOpenMenu, ev) {
	  originatorEv = ev;
	  $mdOpenMenu(ev);
	};

	 $scope.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    };

    $scope.class = '';
    $scope.toggleSearch = '';
    $scope.toggleBack = '';
    $scope.toggleBrand = '';
    $scope.toggleBg = '';
    $scope.searchBar = function(){
    	// Toggle Show / Hide Spacer
    	if ($scope.class === "")
            $scope.class = "hide-spacer", function(){
            	$log.log('class added')
            };
          else
            $scope.class = "";
        // Toggle Search Bar
        if ($scope.toggleSearch === '')
        	$scope.toggleSearch = 'toggle-width';
        else
        	$scope.toggleSearch = "";
        // Toggle Back Button
        if ($scope.toggleBack === '')
        	$scope.toggleBack = 'toggle-back';
        else
        	$scope.toggleBack = "";
        // Toggle Brand Title
        if ($scope.toggleBrand === '')
        	$scope.toggleBrand = 'toggle-brand';
        else
        	$scope.toggleBrand = "";
        // Toggle Background of toolbar
         if ($scope.toggleBg === '')
        	$scope.toggleBg = 'toggle-bg';
        else
        	$scope.toggleBg = "";
    };
    
  });
