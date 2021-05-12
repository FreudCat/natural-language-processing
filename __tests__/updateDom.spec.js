import { TestScheduler } from "@jest/core";
import {showData} from "../src/client/js/updateUI";

describe("Test showData function", () => {
  test("Testing that the function is defined", () => {
    expect(showData).toBeDefined(); //expect this to pass
  })
})