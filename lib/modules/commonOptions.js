module.exports = function (dep) {
  let commonOptions = {
    destination: {
      alias: "d",
      describe: "Host server socket",
      // default: "10.5.5.2:8001",
      type: "string",
      nargs: 1,
      demand: true,
    },
    cred: {
      alias: "c",
      describe: "Client side sertificate",
      type: "string",
      nargs: 1,
      demand: true,
    },
  };

  return commonOptions;
};
