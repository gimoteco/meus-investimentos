import Storage, { APP_KEY_PREFIX } from "./storage";

describe("Storage", () => {
  const [key, value] = ["test", "value"];

  beforeEach(() => {
    localStorage.clear();
  });

  it("should write on localStorage", () => {
    Storage.write(key, value);

    expect(localStorage.getItem(`${APP_KEY_PREFIX}-${key}`)).toBe(value);
  });

  it("should read from localStorage", () => {
    localStorage.setItem(`${APP_KEY_PREFIX}-${key}`, value);

    expect(Storage.read(key)).toBe(value);
  });
});
