var app = angular.module('plunker', ['ngTagsInput']);

app.controller('MainCtrl', function($scope) {
    $scope.tags = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
    ];

    $scope.snArray = [
    '2368000037920',
    '2368000037913',
    '2368000037906',
    '2368000037937',
    '2368000037944',
    '2368000037890',
    '2368000037883',
    '2368000037876',
    '2368000037869',
    '2368000037852',
    '2215000000501']
});
