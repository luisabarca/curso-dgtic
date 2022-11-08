import { toggle } from "./toggle";

describe("toggle", () => {
    it("por defecto aparece inactivo", () => {
        const value = toggle();

        expect(value.active).toBeFalsy();
    });

    it("debe estar actuvo cuando se establece por defecto a true", () => {
        const value = toggle(true);

        expect(value.active).toBeTruthy();
    });

    it("debe estar inactivo cuando se establece por defecto a false", () => {
        const value = toggle(false);

        expect(value.active).toBeFalsy();
    });

    // 
});