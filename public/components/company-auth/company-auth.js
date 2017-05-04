/**
 * Created by sim_one_n_only on 5/3/17.
 */
var app = angular.module("bookingApp.companyAuth", []);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/company-signup", {
            templateUrl: "components/company-auth/company-signup/company-signup.html",
            controller: "companySignupCntrl"
        })
        .when("/company-login", {
            templateUrl: "components/company-auth/company-login/company-login.html",
            controller: "companyLoginCntrl"
        })
        .when("/company-logout", {
            templateUrl: "components/company-auth/company-logout/company-logout.html",
            controller: "companyLogoutCntrl"
        });
}]);

app.service("companyTokenService", function () {
    var companyToken = "token";

    this.setToken = function (token) {
        localStorage[companyToken] = token;
        console.log(localStorage[companyToken]);
    };

    this.getToken = function () {
        return localStorage[companyToken];
    };

    this.removeToken = function () {
        localStorage.removeItem(companyToken);
    };
});

app.service("companyService", ["$http", "$location", "companyTokenService", function ($http, $location, companyTokenService) {
    this.signup = function (company) {
        return $http.post("/company-auth/signup", company);
    };

    this.login = function (company) {
        return $http.post("/company-auth/login", company).then(function (response) {
            companyTokenService.setToken(response.data.token);
            return response;
        });
    };

    this.logout = function () {
        companyTokenService.removeToken();
        $location.path("/");
    };

    this.isAuthenticated = function () {
        return !!companyTokenService.getToken();
    };
}])

app.service("companyAuthInterceptor", ["$q", "$location", "companyTokenService", function ($q, $location, companyTokenService) {
    this.request = function (config) {
        var token = companyTokenService.getToken();
        if(token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    };

    this.responseError = function (response) {
        if (response.status === 401) {
            companyTokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response);
    };
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("companyAuthInterceptor");
}]);