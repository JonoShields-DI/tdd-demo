const filterProperties = require("./filterProperties")

test("should filter out archived properties", () => {
    // arrange
    const properties = [
        {
            id: 0,
            archived: false
        },
        {
            id: 1,
            archived: true
        },
        {
            id: 2,
            archived: false
        }
    ]

    const expectedProperties = [
        {
            id: 0
        },
        {
            id:2
        }
    ]

    // act
    const filtered = filterProperties(properties)

    // assert
    expect(filtered).toEqual(expectedProperties)
})