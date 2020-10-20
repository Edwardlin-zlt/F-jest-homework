import VaccineTest from "../vaccineTest";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      hasAntibodies: false,
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
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

    expect(mockAcceptInjection).toHaveBeenCalledWith(vaccineTest.vaccine);
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    mockGetHasAntibodies.mockReturnValue(true);
    const vaccineTest = new VaccineTest();

    const returnValue = vaccineTest.test();

    expect(returnValue).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    const vaccineTest = new VaccineTest();
    mockGetHasAntibodies.mockReturnValue(false);

    const returnValue = vaccineTest.test();

    expect(returnValue).toBe("Vaccine Test Failed");
  });
});
