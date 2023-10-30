// import server
const jsonserver = require('json-server')

const cors = require('cors')
// create server

const server = jsonserver.create()

// json type data - js data- before request resolve

const middleWare = jsonserver.defaults()

// create router
const router=jsonserver.router('db.json')


// apply middleware
server.use(middleWare)
server.use(cors())
server.use(router)










const PORT = 5000
server.listen(PORT, () => {
    console.log(`___json server started at port : ${PORT}___`);
})