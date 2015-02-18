/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            var self = this;
            this.super();
            window.setTimeout(function () {
                self.items.splice(1, 1);
                self.items[0].value = 5;
            }, 10000)
        }
    },

    items: {
        value: [
            {type: "item", value: 1},
            {type: "item", value: 2},
            {type: "item", value: 3}
        ]
    },

    square: {
        value: function (value) {
            return value * value;
        }
    }
});
