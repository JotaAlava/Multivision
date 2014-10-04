/**
 * Created by Jose on 10/3/2014.
 */
angular.module('app').controller('mvMainCtrl', function($scope){
    $scope.courses = [
        {name: '1C# for Sociopaths', featured:true, published: new Date()},
        {name: '2C# for Sociopaths', featured:true, published: new Date()},
        {name: '3C# for Sociopaths', featured:true, published: new Date()},
        {name: '4C# for Sociopaths', featured:true, published: new Date()},
        {name: '5C# for Sociopaths', featured:true, published: new Date()},
        {name: '6C# for Sociopaths', featured:true, published: new Date()},
        {name: '7C# for Sociopaths', featured:true, published: new Date()}
    ];
});