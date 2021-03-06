angular.module('fleetonrails.services.me-service', [])

    .factory('MeService', [ '$http', 'globalSettings', function($http, globalSettings) {
        return {
            get: function(success, error) {
                $http({
                    method: 'GET',
                    url: globalSettings.api_base_url + '/v1/me',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).success(function(user){
                    console.log('sucess', user);
                    success(user);
                    }).error(function(data) {
                        error(data)
                        console.log(data);
                    })
            },

            change: function(data, success, error) {
                $http({
                    method: 'PUT',
                    url: globalSettings.api_base_url + '/v1/me',
                    data: data,
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).success(function(user) {
                        success(user);
                    }).error(function(data) {
                        error(data)
                        console.log(data);
                    })
            },
            changePassword: function(data, success, error) {
                $http({
                    method: 'PUT',
                    url: globalSettings.api_base_url + '/v1/me',
                    data: data,
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).success(function(user) {
                        success(user);
                    }).error(function(data) {
                        error(data);
                        console.log(data);
                    })
            }
        }
    }]);