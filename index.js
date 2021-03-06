'use strict';

// Export the import and export functionality for doctor service
module.exports = {
    exportAsset: require('./src/core/export'),
    importAsset: require('./src/core/import'),
    deleteAsset: require('./src/core/delete'),
    eventHandler: require('./src/events/emitter')
};
