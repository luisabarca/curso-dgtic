
const post = () => {
    console.log("Enviando datos");
}

const getData = () => {
    console.log("obteniendo datos")
}

module.exports = {
    post,
    get: getData,
};