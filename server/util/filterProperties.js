const filterProperties = (properties) => {
    const filtered = properties.filter(property => !property.archived)

    const archivedRemoved = filtered.map((property) => {
        delete property.archived
        return property
    })

    return archivedRemoved
}

module.exports = filterProperties