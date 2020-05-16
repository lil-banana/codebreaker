class CodeBreaker {
  constructor(secret) {
    if (secret) {
      this.secret = secret
    } else {
      this.secret = Math.floor(Math.random() * 10000).toString()
    }
  }

  guess (newCode){
    var response = newCode.split("").map((c, index) => {
      if (this.secret.includes(c)){
        return (c == this.secret[index]) ? "x" : "-"
      } else {
        return ""
      }
    })
    return response.sort().reverse().join("")
  }
}

module.exports.CodeBreaker = CodeBreaker;