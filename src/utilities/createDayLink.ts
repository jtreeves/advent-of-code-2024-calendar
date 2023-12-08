import url from '../data/url'

function createDayLink(day: number): string {
    const dayLink: string = url + day

    return dayLink
}

export default createDayLink
