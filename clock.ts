const DAY: number = 60 * 24
export class Clock {
    private time: number
    constructor(h: number, m: number = 0) {
        this.time = 0
        this.adjust(h * 60 + m)
    }
    adjust(minutes: number) {
        this.time = (((this.time + minutes) % DAY) + DAY) % DAY
        return this
    }
    toString() {
        return ('00' + Math.floor(this.time / 60)).slice(-2) + ':' 
            + ('00' + this.time % 60).slice(-2)
    }
    plus(m: number) {
        return this.adjust(m)
    }
    minus(m: number) {
        return this.adjust(-m)
    }
    equals(clock: Clock) {
        return this.toString() === clock.toString()
    }
}
