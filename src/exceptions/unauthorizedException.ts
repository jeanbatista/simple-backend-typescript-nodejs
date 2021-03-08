/* eslint-disable @typescript-eslint/explicit-member-accessibility */

class UnauthorizedException {
    text: string

    constructor (message: string) {
      this.text = message
    }
}

export default UnauthorizedException
