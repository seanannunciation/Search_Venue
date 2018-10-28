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
var searchresults_services_1 = require("../services/searchresults.services");
var UserComponent = (function () {
    //obtain values from the api call to display
    function UserComponent(searchValues) {
        var _this = this;
        this.searchValues = searchValues;
        this.searchResultService = searchValues;
        this.searchValues.getSearchResults().subscribe(function (values) {
            console.log(values);
            _this.searchresults = values;
        });
    }
    // pass user input search value to get search results for the respective value
    UserComponent.prototype.searchvenues = function (value) {
        var _this = this;
        this.searchResultService.getUserSearchResults(value).subscribe(function (values) {
            console.log(value);
            _this.searchresults = values;
            console.log(_this.searchresults);
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "\n  <div class=\"venue\">\n    <h1>Select Venue </h1>\n      <div class=\"results\">\n        <input type=\"text\" id=\"inputtext\" (keyup)=\"searchvenues($event.target.value)\" placeholder=\"search venues...\"/>\n          <div class=\"col\" id=\"venue_list\" *ngFor=\"let value of searchresults\">\n            <img class=\"card-img-top\" src=\"{{value.imageUrl}}\" alt=\"Venue Image\">\n            <p class=\"card-text\">{{value.name}}</p>\n            <p class=\"location\">{{value.location}} | {{value.distance}} mi</p>\n          </div>\n      </div>\n  </div>\n    ",
        providers: [searchresults_services_1.SearchResults]
    }),
    __metadata("design:paramtypes", [searchresults_services_1.SearchResults])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.components.js.map