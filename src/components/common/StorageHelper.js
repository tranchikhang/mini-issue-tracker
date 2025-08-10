import m from 'mithril';

let StorageHelper = {

    init: function() {
    },

    set: function(key, value) {
        localStorage.setItem(key, value);
    },

    get: function(key) {
        return localStorage.getItem(key);
    },

    remove: function(key) {
        localStorage.removeItem(key);
    }
}

export default StorageHelper;