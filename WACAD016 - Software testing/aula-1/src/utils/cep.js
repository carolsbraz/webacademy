const ApiNodeCorreios = require("node-correios");

function cepInfo(cep) {
  const correios = new ApiNodeCorreios();

  return new Promise((resolve, reject) => {
    correios
      .consultaCEP({ cep })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/*
async function testCepInfo() {
  try {
    const result = await cepInfo('69041360');
    console.log("resultado testCepInfo", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to test it
testCepInfo();
**/

module.exports = { cepInfo };
