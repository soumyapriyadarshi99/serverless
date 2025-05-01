exports.greet = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Serverless greet working fine",
    }),
  };
};
