import {describe, expect, it} from "vitest";
import {testedFunction} from "../src";

describe("my test", () => {
    it("should pass", () => {
        const result = testedFunction();
        expect(result).toEqual(true);
    });
});
