---
type: tool_used
tool: Skill
input_match: '"skill"\s*:\s*"(?:[\w-]+:)?(?:api-and-interface-design|browser-testing-with-devtools|ci-cd-and-automation|code-review-and-quality|code-simplification|codebase-design|constraint-driven-development|context-engineering|debugging-and-error-recovery|deprecation-and-migration|documentation-and-adrs|doubt-driven-development|frontend-ui-engineering|git-workflow-and-versioning|idea-refine|incremental-implementation|interview-me|observability-and-instrumentation|performance-optimization|planning-and-task-breakdown|prototype|security-and-hardening|shipping-and-launch|source-driven-development|spec-driven-development|test-driven-development)"'
min: 0
max: 0
---

A plain question that the code answers matches no lifecycle skill, so Skill Rule 1's 1% rule loads none of them. The list is every skill that using-brain's Quick Reference puts in one of the six stages (define, plan, build, verify, review, ship); `scripts/evals/__tests__/no-overload.test.ts` keeps it equal to that table. The router itself and the skills of no stage (setup-brain, status, ask-user-question, handoff, domain-modeling, wait-what, writing-for-agents) may load. If this grader fails on a host that routes skills natively, the 1% wording is softened (Decisions row "Anti-rationalization rules").
