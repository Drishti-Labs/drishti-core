'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.getMediaDevices = void 0;
const getMediaDevices = () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log('enumerateDevices() not supported.');
  } else {
    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        devices.forEach(device => {
          console.log(
            `${device.kind}: ${device.label} id = ${device.deviceId} and groupId = ${device.groupId}`
          );
        });
      })
      .catch(err => {
        console.log(`${err.name}: ${err.message}`);
      });
  }
};
exports.getMediaDevices = getMediaDevices;
//# sourceMappingURL=index.js.map
