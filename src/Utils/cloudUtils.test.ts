import {describe, it, expect} from 'vitest'
import {generateCloud, cloudConfig} from "./cloudUtils.ts";

describe('generateCloud', () => {
    it('should generate a cloud following the config', () => {
        const size = 'small'
        const speed = 'slow'
        const type = 'normal'

        const [minDuration, maxDuration] = cloudConfig[size].duration[speed]
        const [minOpacity, maxOpacity] = cloudConfig[size].opacity[type]
        const allowedImages = cloudConfig[size].imagePool

        const result = generateCloud(size, speed, type)

        expect(result.duration).toBeGreaterThanOrEqual(minDuration)
        expect(result.duration).toBeLessThanOrEqual(maxDuration)

        expect(result.opacity).toBeGreaterThanOrEqual(minOpacity)
        expect(result.opacity).toBeLessThanOrEqual(maxOpacity)

        expect(allowedImages).toContain(result.src)
        //TODO make this test all possibilities
        //while this works, it doesn't actually test the functionality, it only tests if
        //one randomly generated cloud just so happens to fall within the boundaries
        //apparently vi.spyOn can solve this, so I can test the two boundaries of randomness myself
        //and mock the low and high values, which should solve this, so TODO figure out how vi.spyOn works
    })
})