import { urlValidate } from "../src/client/js/validate";

describe("Check urlValidate function", () => {
  test("Test regex for url-type input", () => {
    expect(urlValidate("www.abc.com")).toBeTruthy(); //expect this one to pass
  }); 
  test("Test regex for url-type input", () => {
    expect(urlValidate("abc.com")).toBeTruthy(); //expect this one to pass
  }); 
  test("Test regex for url-type input", () => {
    expect(urlValidate("http://www.abc.com/xyz")).toBeTruthy(); //expect this one to pass
  }); 
  test("Test regex for url-type input", () => {
    expect(urlValidate("www.abc.com/xyz")).toBeTruthy();  //expect this one to pass
  }); 
  test("Test regex for non url-type input", () => {
    expect(urlValidate("xyz")).toBe(false); //expect this one pass
  }); 
});