const assert  = require('assert')
const {entity, field} = require('../src/commonjs/herbs.cjs')

describe('A entity', () => {

    describe('the simplest entity', () => {

        const givenTheSimplestEntity = () => {
            const AnEntity = entity('A entity', {
                field1: field(Number)
            })
            return new AnEntity()
        }

        it('should initiate', () => {
            //given
            const instance = givenTheSimplestEntity()
            //then
            assert.equal(instance.meta.name, 'A entity')
        })

        it('should set a value to a field', () => {
            //given
            const instance = givenTheSimplestEntity()
            //when
            instance.field1 = 1
            //then
            assert.strictEqual(instance['field1'], 1)
        })
    })
})
