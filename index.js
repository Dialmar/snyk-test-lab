const express = require("express")
const insecure = require("./insecure")

const app = express()

// attach insecure routes
insecure(app)

// Start server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
