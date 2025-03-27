import FizzBuzz from '../src/FizzBuzz'

describe('FizzBuzz', () => {
  describe('should be emtpy array ([])', () => {
    describe('not input anything to FizzBuzz', () => {
      const fizzBuzz = new FizzBuzz()

      it('should return empty array', () => {
        expect(fizzBuzz.getResult()).toEqual([])
      })

      it('should return Array length is 0', () => {
        expect(fizzBuzz.getResult().length).toBe(0)
      })
    })

    describe('input null to FizzBuzz', () => {
      const fizzBuzz = new FizzBuzz(null)

      it('should return empty array', () => {
        expect(fizzBuzz.getResult()).toEqual([])
      })

      it('should return Array length is 0', () => {
        expect(fizzBuzz.getResult().length).toBe(0)
      })
    })

    describe('input undefined to FizzBuzz', () => {
      const fizzBuzz = new FizzBuzz(undefined)

      it('should return empty array', () => {
        expect(fizzBuzz.getResult()).toEqual([])
      })

      it('should return Array length is 0', () => {
        expect(fizzBuzz.getResult().length).toBe(0)
      })
    })

    describe('input invalid number to FizzBuzz', () => {
      describe('input 0', () => {
        const fizzBuzz = new FizzBuzz(0)

        it('should return empty array', () => {
          expect(fizzBuzz.getResult()).toEqual([])
        })

        it('should return Array length is 0', () => {
          expect(fizzBuzz.getResult().length).toBe(0)
        })
      })

      describe('input decimal number', () => {
        it('input 0.5', () => {
          const fizzBuzz = new FizzBuzz(0.5)
          expect(fizzBuzz.getResult()).toEqual([])
        })
        
        it('input 1.5', () => {
          const fizzBuzz = new FizzBuzz(1.5)
          expect(fizzBuzz.getResult()).toEqual([])
        })

        it('input 9.0000000003', () => {
          const fizzBuzz = new FizzBuzz(9.0000000003)
          expect(fizzBuzz.getResult()).toEqual([])
        })
      })

      describe('input negative number', () => {
        it('input -1', () => {
          const fizzBuzz = new FizzBuzz(-1)
          expect(fizzBuzz.getResult()).toEqual([])
        })

        it('input -1.5', () => {
          const fizzBuzz = new FizzBuzz(-1.5)
          expect(fizzBuzz.getResult()).toEqual([])
        })

        it('input -9.0000000003', () => {
          const fizzBuzz = new FizzBuzz(-9.0000000003)
          expect(fizzBuzz.getResult()).toEqual([])
        })
      })
    })
  })
})
