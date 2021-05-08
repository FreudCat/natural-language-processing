import {handleSubmit} from "../src/client/js/handleSubmit"; 

describe("Check function", () => {
  test("Testing handleSubmit() function is not null", () => {
    expect(handleSubmit).toBeTruthy();
  });
})