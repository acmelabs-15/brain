---
description: "Simplify code for clarity and maintainability — reduce complexity without changing behavior"
---

Use the `code-simplifier:code-simplifier` plugin agent, not the local `code-simplification` skill:
the plugin runs the project's tests between each edit and reverts anything that breaks them, while
the local skill only advises (`~/CLAUDE.md` §4). Fall back to the local skill only where the plugin
is unavailable, and then verify by hand.

Simplify recently changed code (or the specified scope) while preserving exact behavior:

1. Read the project's agent brief — `CLAUDE.md`, or `AGENTS.md` where that is the repo's convention —
   and study its conventions
2. Identify the target code — recent changes unless a broader scope is specified
3. Understand the code's purpose, callers, edge cases, and test coverage before touching it
4. Scan for simplification opportunities:
   - Deep nesting → guard clauses or extracted helpers
   - Long functions → split by responsibility
   - Nested ternaries → if/else or switch
   - Generic names → descriptive names
   - Duplicated logic → shared functions
   - Dead code → remove after confirming
5. Apply each simplification incrementally — run tests after each change
6. Verify all tests pass, the build succeeds, and the diff is clean

If tests fail after a simplification, revert that change and reconsider. Use `code-review-and-quality` to review the result.
