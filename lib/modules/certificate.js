module.exports =function(dep){

  let result = {}

  result.readCert = function(path) {
    const fs = require("fs");
    if (!(fs.existsSync(path) && fs.lstatSync(path).isFile())) {
      throw new Error("Sertifika dosyasi hatali veya yok!");
    }
    const certContent = fs.readFileSync(path);
    return certContent;
  }

  return result
}
