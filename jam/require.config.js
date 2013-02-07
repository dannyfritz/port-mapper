var jam = {
    "packages": [
        {
            "name": "bootstrap",
            "location": "jam/bootstrap"
        },
        {
            "name": "font-awesome-more",
            "location": "jam/font-awesome-more"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "jam/knockout",
            "main": "knockout.js"
        },
        {
            "name": "lodash",
            "location": "jam/lodash",
            "main": "./lodash.js"
        },
        {
            "name": "moment",
            "location": "jam/moment",
            "main": "moment.js"
        },
        {
            "name": "store",
            "location": "jam/store",
            "main": "store"
        }
    ],
    "version": "0.2.13",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "bootstrap",
            "location": "jam/bootstrap"
        },
        {
            "name": "font-awesome-more",
            "location": "jam/font-awesome-more"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "jam/knockout",
            "main": "knockout.js"
        },
        {
            "name": "lodash",
            "location": "jam/lodash",
            "main": "./lodash.js"
        },
        {
            "name": "moment",
            "location": "jam/moment",
            "main": "moment.js"
        },
        {
            "name": "store",
            "location": "jam/store",
            "main": "store"
        }
    ],
    "shim": {}
});
}
else {
    var require = {
    "packages": [
        {
            "name": "bootstrap",
            "location": "jam/bootstrap"
        },
        {
            "name": "font-awesome-more",
            "location": "jam/font-awesome-more"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "jam/knockout",
            "main": "knockout.js"
        },
        {
            "name": "lodash",
            "location": "jam/lodash",
            "main": "./lodash.js"
        },
        {
            "name": "moment",
            "location": "jam/moment",
            "main": "moment.js"
        },
        {
            "name": "store",
            "location": "jam/store",
            "main": "store"
        }
    ],
    "shim": {}
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}