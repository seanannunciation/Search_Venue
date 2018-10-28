"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SearchResults = (function () {
    function SearchResults(http) {
        this.http = http;
        console.log("Venue page loaded");
    }
    SearchResults.prototype.getUserSearchResults = function (value) {
        var url = 'https://api.demo.partaketechnologies.com/api/venue';
        var page = 1;
        var limit = 20;
        if (value.trim().length != 0) {
            url = url + '?page=' + page + '&limit=' + limit + '&q=' + value;
        }
        return this.http.get(url)
            .map(function (res) {
            var nRes = res.json();
            var mappedResponse = nRes.map(function (val) {
                getdistance(val.latitude, val.longitude);
                function getdistance(lat_val, longt_val) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var current_loc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        var search_loc = new google.maps.LatLng(lat_val, longt_val);
                        var distance_in_metres = google.maps.geometry.spherical.computeDistanceBetween(current_loc, search_loc);
                        var distance_in_miles = distance_in_metres * 0.000621371192;
                        val.distance = distance_in_miles.toFixed(2);
                    }, function () {
                        alert("Location Unavailable");
                    });
                }
                return val;
            });
            return mappedResponse;
        });
    };
    SearchResults.prototype.getSearchResults = function () {
        var url = 'https://api.demo.partaketechnologies.com/api/venue';
        // let page=1;
        // let limit=20;
        return this.http.get(url)
            .map(function (res) {
            var nRes = res.json();
            var mappedResponse = nRes.map(function (val) {
                getdistance(val.latitude, val.longitude);
                function getdistance(lat_val, longt_val) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var current_loc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        var search_loc = new google.maps.LatLng(lat_val, longt_val);
                        var distance_in_metres = google.maps.geometry.spherical.computeDistanceBetween(current_loc, search_loc);
                        var distance_in_miles = distance_in_metres * 0.000621371192;
                        val.distance = distance_in_miles.toFixed(2);
                    }, function () {
                        alert("Location Unavailable");
                    });
                }
                return val;
            });
            return mappedResponse;
        });
    };
    return SearchResults;
}());
SearchResults = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SearchResults);
exports.SearchResults = SearchResults;
//# sourceMappingURL=searchresults.services.js.map