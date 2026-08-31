---
description: "Write the requirements document — a PRD or tracker spec — before writing code"
---

Invoke the writing-specs skill.

Begin by understanding what the user wants to build. Ask clarifying questions about:
1. The objective and target users
2. Core features and acceptance criteria
3. Tech stack preferences and constraints
4. Known boundaries (what to always do, ask first about, and never do)

Then generate the document from the skill's template pool: objective, user stories, success criteria, tech stack and commands, project structure, code style, testing strategy, boundaries, out of scope, open questions and the Plans table. When the conversation already settled the requirements, use the skill's synthesis intake and skip the questions.

If the request bundles several independently testable capabilities, first propose a capability map (module ids, dependency direction, build order) per the skill's scope check and get it approved, then spec each module in dependency order.

Save the spec where this project keeps specs — the project's own convention always wins. Read
`~/.claude/references/project-docs-conventions.md` first, and let a repo that names its own location
(a `CLAUDE.md` pointing at `docs/`, an existing PRD to continue) override even that. `SPEC.md` in the
project root is the fallback for a repo with no convention. Say where you saved it, and confirm with
the user before proceeding.
