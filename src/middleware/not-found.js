const notFound = (req, res) => res.status(404).send(
    `<h1>Page not found 404 :(</h1>`
)

export default notFound
