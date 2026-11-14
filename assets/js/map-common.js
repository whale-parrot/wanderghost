// Shared map helpers for the post map and the global travel map.
// Loaded before map-loader.js and global-map.js in default.hbs.
(function () {
    'use strict';

    window.wanderGhostCreateMarkerIcon = function () {
        return L.divIcon({
            className: 'wanderghost-custom-marker',
            html: '<i class="ph-fill ph-map-pin"></i>',
            iconAnchor: [24, 48],
            popupAnchor: [0, -48]
        });
    };

    window.wanderGhostEscapeHtml = function (value) {
        return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[character];
        });
    };
})();
