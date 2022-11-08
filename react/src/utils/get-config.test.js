import { getConfig } from "./get-config";

describe("getConfig", () => {
    it("obtiene localhost cuando el ambiente es de desarrollo", () => {
        // Mock que retorna siempre "dev"
        const getEnv = jest.fn(() => "dev");

        const config = getConfig(getEnv);
    
        expect(getEnv).toBeCalledTimes(1);
        expect(config.host).toBe("localhost");
    });

    it("obtiene guerrero.gob.mx cuando el ambiente es de producción", () => {
        // Mock que retorna siempre "prod"
        const getEnv = jest.fn(() => "prod");

        const config = getConfig(getEnv);
    
        expect(getEnv).toBeCalled();
        expect(config.host).toBe("guerrero.gob.mx");
    });
});
