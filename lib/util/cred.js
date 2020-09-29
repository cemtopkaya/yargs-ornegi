exports.Certificate = class Certificate {

  static readCert(path) {
    const fs = require("fs");
    if (!(fs.existsSync(path) && fs.lstatSync(path).isFile())) {
      throw new Error("Sertifika dosyasi hatali veya yok!");
    }
    const certContent = fs.readFileSync(path);
    return certContent;
  }
}
