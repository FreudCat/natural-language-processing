import {handleSubmit} from "../src/client/js/handleSubmit"; 

//describe takes a string that "describes" the purpose of all of the unit testing followed by a function. "Test" takes a string that describes that specific test, followed by the actual test in the function. Can have multiple tests within one "describe" if they test different aspects of the overall function. 
describe("Check function", () => {
  test("Testing handleSubmit() function is not null", () => {
    expect(handleSubmit).toBeDefined(); //expect this one to pass
  });
})