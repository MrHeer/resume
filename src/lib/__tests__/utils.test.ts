import { describe, it, expect } from "vitest"
import { cn, groupBy } from "../utils"

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("a", "b")).toBe("a b")
  })

  it("filters falsy values", () => {
    expect(cn("a", false, undefined, null, "b")).toBe("a b")
  })

  it("resolves Tailwind conflicts", () => {
    expect(cn("px-4 px-6")).toBe("px-6")
  })
})

describe("groupBy", () => {
  it("groups items by a key function", () => {
    const items = [
      { type: "a", val: 1 },
      { type: "b", val: 2 },
      { type: "a", val: 3 },
    ]
    const result = groupBy(items, (item) => item.type)
    expect(result).toEqual({
      a: [
        { type: "a", val: 1 },
        { type: "a", val: 3 },
      ],
      b: [{ type: "b", val: 2 }],
    })
  })

  it("returns empty object for empty array", () => {
    expect(groupBy([], (x: unknown) => String(x))).toEqual({})
  })
})
