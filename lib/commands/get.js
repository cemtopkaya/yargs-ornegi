"use strict";

const fs = require('fs')

module.exports = function (dep) {
  const checkOptions = function (params, options) {
      console.log("check icinde buraya geldi", params);
      // console.log(">> params: ", params, " << options >> ", options);

      // belirtilen dosya yolunda sertifika var mi?
      // if (!params.cred) throw new Error("Sertifika dosyasi girilmeli!");

      if (!fs.existsSync(params.cred))
        throw new Error("Sertifika dosyasi bulunamadi!");

      // Eğer destination socket formunda verilmemişse hata göster
      // if (!params.destination)  throw new Error("Hedef sunucu bilgisi girilmeli!");
      
      if (params.destination) {
        var patternHostPort = /^(?:([a-zA-Z]+)|(\d+\.\d+.\d+.\d+)):\d{4}$/;

        if (!patternHostPort.test(params.destination)) {
          throw new Error("destination bilgisi hatali");
        }
      }

      return true;
    },
    buildCommand = (yargs) => {
      return yargs.options(dep.commonOptions).check(checkOptions);
    },
    cmd = {};

  cmd.command = "get [destination] [cred]";
  cmd.desc = "Retrieve the entity";
  cmd.builder = buildCommand;
  cmd.handler = function (argv) {
    console.log("get komutu handleri: ", dep.certificate);
  };

  return cmd;
};
