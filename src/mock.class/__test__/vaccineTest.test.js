import VaccineTest from "../vaccineTest";

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      hasAntibodies: false,
      acceptInjection: jest.fn(),
      getHasAntibodies: jest.fn(),
    };
  });
});

jest.mock("../covid19Vaccine", () => {
  return jest.fn().mockImplementation(() => {
    return {
      composition: [],
    };
  });
});

beforeEach(() => {
  // clear mock here
  jest.resetModules();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const vaccineTest = new VaccineTest();

    vaccineTest.inject();

    expect(vaccineTest.recipient.acceptInjection).toHaveBeenCalledWith(
      vaccineTest.vaccine
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    const vaccineTest = new VaccineTest();
    vaccineTest.recipient.getHasAntibodies.mockReturnValue(true);
    // TODO 15: add test here

    const returnValue = vaccineTest.test();

    expect(returnValue).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    const vaccineTest = new VaccineTest();
    vaccineTest.recipient.getHasAntibodies.mockReturnValue(false);

    const returnValue = vaccineTest.test();

    expect(returnValue).toBe("Vaccine Test Failed");
  });
});
