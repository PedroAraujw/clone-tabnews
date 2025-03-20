function status (request, response) {
  response.status(200).json({ "chave" : "O importante e Aterrisagem!"})
}

export default status