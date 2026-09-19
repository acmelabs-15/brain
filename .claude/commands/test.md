---
description: Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern.
---

Invoke the brain:test-driven-development skill. The stage's standing rules live in that skill: a decision that is the user's goes through the host's user-question tool, one question per call, composed with brain:ask-user-question; domain words come from `CONTEXT.md` through `docs/agents/domain.md`; the spec and the plan live in this repo.

For new features:
1. Write tests that describe the expected behavior (they should FAIL)
2. Implement the code to make them pass
3. Refactor while keeping tests green

For bug fixes (Prove-It pattern), invoke brain:debugging-and-error-recovery first: it builds the feedback loop that goes red on the bug, and stops to ask when none can be built. Then:
1. Write a test that reproduces the bug (must FAIL)
2. Confirm the test fails
3. Implement the fix
4. Confirm the test passes
5. Run the full test suite for regressions

For browser-related issues, also invoke brain:browser-testing-with-devtools to verify with Chrome DevTools MCP.
