import orm from '../orm'

// TODO: this should not be included in bundle
export const wipeDatabase = async () => {
    // @ts-expect-error
    const models = Object.keys(orm._baseDmmf.modelMap)

    const actions = models.map((model) => {
        // Model names are formatted like the following `AccessRight`, we need to transform them to `accessRight` format for the orm call
        const name = model.charAt(0).toLowerCase() + model.slice(1)

        // @ts-expect-error
        return orm[name].deleteMany()
    })

    await orm.$transaction(actions)
}
