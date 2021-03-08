/* eslint-disable @typescript-eslint/explicit-member-accessibility */

class NotFoundException {
    text: string

    constructor (message: string) {
      this.text = message
    }
}

export default NotFoundException
