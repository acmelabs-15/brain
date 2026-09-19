# Tasks: plain-talk

- [x] Task 1: source text and templates
  - Acceptance: `plain-talk/PLAIN-TALK.md` carries the five parts of the user-level talk-plain style; the vocabulary rule names CONTEXT.md and CONTEXT-MAP.md in domain-modeling's words; the repair line names wait-what; no host-specific tool name in the body; three templates each hold `{{body}}` once
  - Verify: `grep -c '{{body}}'` is 1 per template; a read of the source against the five parts
  - Files: plain-talk/PLAIN-TALK.md, plain-talk/templates/output-style.md, plain-talk/templates/gemini.md, plain-talk/templates/agents-block.md
- [x] Task 2: renderer
  - Acceptance: `bun run plain-talk:render` writes the three outputs; `-- --check` exits 1 on any drift and 0 when clean; a template without `{{body}}` is an error naming it; the body is byte-identical in the three outputs
  - Verify: `bun test scripts/plain-talk`
  - Files: scripts/plain-talk/render.ts, scripts/plain-talk/__tests__/render.test.ts, package.json
- [ ] Task 3: rendered outputs
  - Acceptance: `output-styles/talk-plain.md` with the four frontmatter fields, `GEMINI.md` at the root, `plain-talk/AGENTS-block.md` with start and end markers; `bun run validate` passes
  - Verify: `bun run plain-talk:render -- --check` and `bun run validate`
  - Files: output-styles/talk-plain.md, GEMINI.md, plain-talk/AGENTS-block.md
- [ ] Task 4: CI
  - Acceptance: CI runs `plain-talk:render -- --check` after the sync check
  - Verify: the workflow file
  - Files: .github/workflows/ci.yml
