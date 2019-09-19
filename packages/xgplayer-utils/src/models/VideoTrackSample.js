export default class VideoTrackSample {
  constructor (info) {
    let _default = VideoTrackSample.getDefault()

    if (!info) {
      return _default
    }
    let sample = Object.assign({}, _default, info)

    return sample
  }

  static getDefaultInf () {
    return {
      dts: null,
      pts: null,
      isKeyframe: false, // is Random access point
      originDts: null,
      data: new Uint8Array()
    }
  }
}