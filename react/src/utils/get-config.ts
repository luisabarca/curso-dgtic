
export const getConfig = (getEnvironment: () => string) => {
  // Llama a la función del param para obtener env.
  const env = getEnvironment();

  if (env === "dev") {
    return {
      host: "localhost",
    };
  }

  //

  return {
    host: "guerrero.gob.mx",
  };
};
