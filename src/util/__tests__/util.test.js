import { timeConverter, convertCaloriesToKJ, round } from "../index";

test('timConverter should equal 25 min', () => {
  const timeValue = timeConverter("25");
  expect(timeValue).toBe("25 min");
});

test('timConverter should equal 1 hr', () => {
    const timeValue = timeConverter("60");
    expect(timeValue).toBe("1 hr");
});

test('timConverter should equal 2 hr 2 min', () => {
    const timeValue = timeConverter("122");
    expect(timeValue).toBe("2 hr 2 min");
});

test('convertCaloriesToKJ should equal 1', () => {
    const timeValue = convertCaloriesToKJ(5);
    expect(timeValue).toBe("1");
});

test('round should get 3 stars', () => {
    const timeValue = round(3);
    expect(timeValue).toStrictEqual([3, 0, 2]);
});