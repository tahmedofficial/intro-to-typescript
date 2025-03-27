abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) { }

    abstract getSepia(): void
    getReelTime(): number {
        return 8
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {

    }
}

const tanvir = new Instagram("test", "test", 8)

export { }