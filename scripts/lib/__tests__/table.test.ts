import { describe, expect, test } from "bun:test";

import { tableCells } from "../table";

describe("tableCells", () => {
  test("gives each cell of a table line, trimmed, without the outer pipes", () => {
    expect(tableCells("  | 01 | Pick a host |  open |  ")).toEqual(["01", "Pick a host", "open"]);
  });

  test("keeps an escaped pipe inside its cell", () => {
    expect(tableCells("| a \\| b | c |")).toEqual(["a \\| b", "c"]);
  });

  test("reads a line with no closing pipe", () => {
    expect(tableCells("| a | b")).toEqual(["a", "b"]);
  });

  test("gives null for a line that is not a table line", () => {
    expect(tableCells("Some text | with a pipe")).toBeNull();
  });
});
