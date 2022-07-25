const getMediaDevices = () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log('enumerateDevices() not supported.');
  } else {
    // List cameras and microphones.
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

export {getMediaDevices};
