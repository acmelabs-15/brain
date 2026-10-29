---
name: spec-driven-development
description: Writes a spec before code. Interviews when the ask is underspecified, confirms assumptions one question at a time, chooses the test seams, detours to a throwaway prototype when a question needs a runnable answer, and saves spec.md in its own spec folder. Use for a new project, feature or significant change with no spec, a vague idea or PRD, or a request that needs a capability map of modules first.
---

# Spec-Driven Development

## Overview

Write a structured specification before you write any code. The spec is the shared source of truth between you and the human engineer. It defines what we build, why, and how we know it is done. Code without a spec is guessing.

## When to Use

- Starting a new project or feature
- Requirements are ambiguous or incomplete
- The change touches multiple files or modules
- You are about to make an architectural decision
- The task would take more than 30 minutes to implement
- A design question needs a runnable answer before the spec can settle (the prototype detour in Stage 1)

**When NOT to use:** Single-line fixes, typo corrections, or changes where requirements are unambiguous and self-contained.

## The Gated Workflow

Spec-driven development has four stages. A scope check (Stage 0) precedes them and activates only when one request bundles several independently testable capabilities. Do not advance to the next stage until the current one is validated.

```
SPECIFY ──→ PLAN ──→ TASKS ──→ IMPLEMENT
   │          │        │          │
   ▼          ▼        ▼          ▼
 Human      Human    Human      Human
 reviews    reviews  reviews    reviews
```

Every gate is the human's decision. `Call the Skill tool with "ask-user-question"` and put the decision through the host's user-question tool, one question per call, with your recommendation and the fact behind it inside the question text. The same tool serves every decision named below as "the question tool". A small, reversible choice stays yours: decide it, state what decided it, and keep going.

### Run `brain`

`brain` is brain's command-line tool. It creates every numbered file, a spec folder included, and checks the workspace. On Claude Code, run it as:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" <cmd>
```

Claude Code fills in the plugin path when it loads this skill. On another host, resolve the plugin folder as setup-brain does, then run `scripts/brain.ts` from it with bun. Below, `brain <cmd>` stands for this command. In a repo with no `docs/agents/workspace.md`, `brain new-doc` uses the default folders: tell the user once to run setup-brain.

### Stage 0: Scope Check

Most requests describe one capability. If this one does, skip this stage and go straight to Specify. Stage 0 exists for the exception, not the rule, and it puts no hierarchy on single-capability features.

**Detection.** Decompose before specifying when a single requirement bundles several independently testable capabilities:

- The requirement names distinct capabilities with their own consumers or data (e.g. identity, billing, notifications, reporting)
- Acceptance criteria cluster into groups that could ship and be verified separately
- One capability could be cut or replaced without rewriting the others' requirements

**Propose a capability map before writing any spec.** Small and reviewable: a module table plus a build order, not a project plan:

```markdown
# Capability Map: [Initiative Name]

| Module id | Responsibility | Depends on |
|---|---|---|
| identity | Accounts, sessions, SSO | none |
| billing | Plans, invoices, payments | identity |
| notifications | Email and webhook fan-out | identity |
| reporting | Usage dashboards | billing, notifications |

Build order: identity → billing, notifications → reporting
```

- **Stable module ids.** Kebab-case, chosen once, never renamed mid-initiative. Specs, plans, and downstream commands select work by these ids instead of guessing which spec is active.
- **Dependency direction, no cycles.** Arrows point one way. If two modules each need the other, they are one module.
- **Interfaces live at the boundary.** The capability map records that `billing` depends on `identity`. The contract between them belongs in the provider module's spec (see api-and-interface-design for designing it).

**The capability map is gated like every stage.** The human reviews module boundaries, dependency direction, and build order before any module spec is written. Put the capability map through the question tool as one question: approve, or name the boundary to change. Getting the capability map wrong is expensive; reviewing ten lines is not.

**Record the approved capability map.** The approval is the user's decision, so it gets a decision record: run `brain new-doc DEC <slug>` and fill it as [domain-modeling's DEC format](../domain-modeling/DEC-FORMAT.md) says, with the module table and the build order in its body.

**Then recurse per module.** Run Specify → Plan → Tasks → Implement for each module in dependency order. Each module gets its own spec, scoped to that module's objective, boundaries, and success criteria, in its own spec folder: create it with `brain new-doc SPEC <module-id>` (Stage 1, step 5), so the module id is the folder's slug, and list the capability map's decision record in its `sources:`. The capability map, not filename guessing, is the index of what exists.

### Stage 1: Specify

Stage 1 runs in order: understand the ask, confirm the assumptions, choose the test seams, take the prototype detour when a question needs one, then write the spec.

**1. Understand the ask.** Read the conversation and the codebase before you ask anything. Two cases:

- The answers are already written: in the conversation (a design thread, a bug discussion), or in the idea file of a finished interview (`IDEA-NNN-<slug>.md` in the workspace's ideas folder, `paths.ideas` in `docs/agents/workspace.md`) and the DEC and RES files its map links. Synthesise from them and ask nothing you can read. Each IDEA, DEC and RES file you use goes into the spec's `sources:` (step 5).
- The ask is underspecified: "build me X" with no "for whom" or "why now". `Call the Skill tool with "interview-me"` and run it to its confidence stop before you write a line of spec.

**2. Surface assumptions.** Before writing any spec content, list what you assume:

```
ASSUMPTIONS I'M MAKING:
1. This is a web application (not native mobile)
2. Authentication uses session-based cookies (not JWT)
3. The database is PostgreSQL (based on existing Prisma schema)
4. We're targeting modern browsers only (no IE11)
```

Then sort the list. An assumption the codebase settles (item 3, the Prisma schema) stays as stated, with its evidence beside it. An assumption that changes what gets built, and that reading cannot settle, is the human's decision: one question through the question tool per assumption, recommendation inside. An assumption still without an answer goes to Open Questions, and the spec waits on it.

The spec exists to surface misunderstandings before code is written. Assumptions are the most dangerous form of misunderstanding, so every one is written down and then either evidenced or asked.

**3. Choose the test seams.** Sketch the seams at which the feature will be tested. Prefer existing seams to new ones. Use the highest seam that still proves the behaviour. Fewer seams across the codebase is better; the ideal number is one. When a new seam is unavoidable, propose it at the highest point you can. Put the seam choice through the question tool: the sketch, the alternatives, and your recommendation. The confirmed seams go into Testing Strategy. The existing tests at those seams go into Prior-art tests.

**4. Take the prototype detour when a question needs a runnable answer.** Some questions resist prose and diagrams: does this state model feel right, does this reducer survive the odd cases, what should this screen look like. For such a question:

1. `Call the Skill tool with "handoff"` and write the handoff document: the question, the spec so far, and what a verdict looks like.
2. In a fresh session, `Call the Skill tool with "prototype"` and build the throwaway in its own directory, named so a reader sees it is a prototype. It answers the one question and nothing else.
3. Hand back with handoff again: the verdict, the question it settled, and the snippet that carries the decision.
4. Record the answer in the spec. Where a snippet encodes the decision more precisely than prose can (a state machine, a reducer, a schema, a type shape), inline it under the section that holds the decision and note that it came from a prototype. Trim it to the decision-rich part, not a working demo.

The main tree keeps only the validated decision. The prototype directory stays out of the spec's Project Structure.

**5. Write the spec.** Name every domain concept with the glossary's words. They come from `GLOSSARY.md` through `docs/agents/domain.md`, which also lists the ADRs to respect. A concept the glossary lacks is a gap to note for the domain-modeling skill, not a synonym to coin.

Cover these six core areas first:

1. **Objective**: What are we building and why? Who is the user? What does success look like?

2. **Commands**: Full executable commands with flags, not just tool names.
   ```
   Build: npm run build
   Test: npm test -- --coverage
   Lint: npm run lint --fix
   Dev: npm run dev
   ```

3. **Project Structure**: Where source code lives, where tests go, where docs belong.
   ```
   src/           → Application source code
   src/components → React components
   src/lib        → Shared utilities
   tests/         → Unit and integration tests
   e2e/           → End-to-end tests
   docs/          → Documentation
   ```

4. **Code Style**: One real code snippet showing your style beats three paragraphs describing it. Include naming conventions, formatting rules, and examples of good output.

5. **Testing Strategy**: What framework, where tests live, coverage expectations, and the seams confirmed in step 3.

6. **Boundaries**: Three-tier system:
   - **Always do:** Run tests before commits, follow naming conventions, validate inputs
   - **Ask first:** Database schema changes, adding dependencies, changing CI config
   - **Never do:** Commit secrets, edit vendor directories, remove failing tests without approval

Then add the three sections that follow them in the template:

7. **User Stories**: a LONG numbered list, one story per line, in the form "As an <actor>, I want <feature>, so that <benefit>". Cover every aspect of the feature; a short list is an unexplored feature.

8. **Out of scope**: what this spec does not build, stated so nobody argues it in later. Seed it from the interview's "not this" answers.

9. **Prior-art tests**: existing tests the new ones should resemble, by path, at the seams from step 3.

**Where the spec lives.** Every spec lives in its own spec folder, `SPEC-NNN-<slug>/`, in the workspace's specs folder (`paths.specs` in `docs/agents/workspace.md`, `docs/specs/` by default). Create the folder with `brain new-doc`, never by hand. Pick a slug (lowercase words joined by hyphens; for a module spec, its module id) and run:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" new-doc SPEC <slug>
```

It claims the next spec number and writes `spec.md`, `tasks/plan.md` and `tasks/todo.md` from brain's templates. `spec.md` comes from `scripts/workspace/templates/spec.md` in the plugin, which holds the sections above plus Tech Stack, Success Criteria and Open Questions. Fill `spec.md`:

- The H1: the ID the template wrote, then the spec's title: `# SPEC-012: <title>`.
- Every section, with the template's headings unchanged.
- `sources:` in the frontmatter: every IDEA, DEC and RES file the spec comes from, such as `sources: [IDEA-004, DEC-031, RES-009]`. Links run one way: an idea holds no list of its specs.
- When `sources:` names an idea, set that idea's `status` to `specced`. The idea is then finished, and a session that resumes it goes to this spec.

Leave `tasks/plan.md` and `tasks/todo.md` as the templates wrote them; planning-and-task-breakdown fills them in Stage 2. The spec is a repo file, committed beside the code. `spec.md` is done when `brain check` reports no finding for it; the findings for the plan and todo files stay until Stage 2 fills them.

**External spec tools:** This workflow is format-agnostic. If the project already uses OpenSpec or another specification system, keep that system's artifact format and storage conventions instead of creating a duplicate spec folder. This skill owns the clarification, content, and approval gates; the external tool owns how the approved spec is represented.

**Reframe instructions as success criteria.** When receiving vague requirements, translate them into concrete conditions:

```
REQUIREMENT: "Make the dashboard faster"

REFRAMED SUCCESS CRITERIA:
- Dashboard LCP < 2.5s on 4G connection
- Initial data load completes in < 500ms
- No layout shift during load (CLS < 0.1)
```

Put the targets through the question tool as one question. This lets you loop, retry, and problem-solve toward a clear goal rather than guessing what "faster" means.

### Stage 2: Plan

With the validated spec, generate a technical implementation plan:

1. Identify the major components and their dependencies
2. Determine the implementation order (what must be built first)
3. Note risks and mitigation strategies
4. Identify what can be built in parallel vs. what must be sequential
5. Define verification checkpoints between phases

> Follow planning-and-task-breakdown for the dependency-graph mapping and vertical-slicing mechanics behind these steps; it is the canonical source. The bullets above are a lightweight summary; if they ever diverge, planning-and-task-breakdown takes precedence.
>
> **Output convention:** The plan goes into the spec folder's `tasks/plan.md` as rows, and the task detail into its `tasks/todo.md` as blocks. `brain new-doc SPEC` already wrote both files. Downstream commands (`/build`, etc.) read them there.

The plan should be reviewable: the human should be able to read it and say "yes, that's the right approach" or "no, change X."

### Stage 3: Tasks

Break the plan into discrete, implementable tasks:

- Each task should be completable in a single focused session
- Each task has explicit acceptance criteria
- Each task includes a verification step (test, build, manual check)
- Tasks are ordered by dependency, not by perceived importance
- No task should require changing more than ~5 files

> Follow planning-and-task-breakdown for the full task-sizing and dependency-ordering mechanics, and for the format: each task is a row in `tasks/plan.md` and a block in `tasks/todo.md`. It is the canonical source; if the bullets above ever diverge from it, planning-and-task-breakdown takes precedence.

### Stage 4: Implement

Execute tasks one at a time. `Call the Skill tool with "incremental-implementation"` for the slicing and `Call the Skill tool with "test-driven-development"` for each slice's loop, at the seams the spec confirmed. Use context-engineering to load the right spec sections and source files at each step rather than flooding the agent with the entire spec.

## Keeping the Spec Alive

The spec is a living document, not a one-time artifact:

- **Update when decisions change.** If you discover the data model needs to change, update the spec first, then implement.
- **Update when scope changes.** Features added or cut are reflected in the spec, and in Out of scope.
- **Update when a prototype settles a question.** The verdict and the trimmed snippet go into the spec before the code that depends on them.
- **Update when a seam changes.** A test added at a new seam updates Testing Strategy and Prior-art tests.
- **Commit the spec.** The spec belongs in version control alongside the code.
- **Reference the spec in PRs.** Link back to the spec section that each PR implements.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "This is simple, I don't need a spec" | Simple tasks don't need *long* specs, but they still need acceptance criteria. A two-line spec is fine. |
| "I'll write the spec after I code it" | That's documentation, not specification. The spec's value is in forcing clarity *before* code. |
| "The spec will slow us down" | A 15-minute spec prevents hours of rework. Waterfall in 15 minutes beats debugging in 15 hours. |
| "Requirements will change anyway" | That's why the spec is a living document. An outdated spec is still better than no spec. |
| "The user knows what they want" | Even clear requests have implicit assumptions. The spec surfaces those assumptions. |
| "The conversation covers it, so I can skip the assumptions" | Synthesis skips the interview, not the assumptions list. The list is where a wrong reading becomes visible. |
| "I'll pick the test seams when I write the tests" | A seam chosen during TDD is chosen per test, and the count creeps. Chosen in the spec, it is one decision the human saw. |
| "I can reason out the state model on paper" | Cases that are hard to reason about are the signal for a prototype. Ten minutes of running code beats a page of maybes. |
| "Three user stories cover it" | A short list is an unexplored feature. The long list is where the missing actor and the missing benefit appear. |
| "It's one big feature; splitting it is overhead" | If acceptance criteria cluster into independently testable groups, a monolithic spec forces every downstream task to reason over the whole contract. A ten-line capability map is the cheap alternative. |
| "I'll decompose during planning" | Planning slices tasks within a spec. By then the oversized artifact already exists. Module boundaries and dependency direction must be decided before the spec is written, not after. |

## Red Flags

- Starting to write code without any written requirements
- Asking "should I just start building?" before clarifying what "done" means
- Implementing features not mentioned in any spec or task list
- Making architectural decisions without documenting them
- Skipping the spec because "it's obvious what to build"
- An assumptions list that ends in "correct me or I proceed" instead of one question per decision
- A Testing Strategy with no seam decision the human confirmed
- A runnable question (state, logic, a screen) answered with prose and a guess
- Prototype code inside the production tree, or a Project Structure that points at it
- A spec kept anywhere other than a spec folder from `brain new-doc SPEC`, or the project's own spec tool
- A `sources:` list that misses an idea, decision or research file the spec draws on
- One spec whose requirements span several independently testable capabilities
- Module boundaries or build order decided implicitly during implementation because no capability map was approved up front

## Verification

Before proceeding to implementation, confirm:

- [ ] The ask was interviewed (interview-me) or the conversation held the answers, and the assumptions list was written either way
- [ ] Every assumption is evidenced from the codebase or confirmed through the question tool, one question per call
- [ ] Test seams are chosen (fewest, highest, existing first) and the human confirmed them
- [ ] The spec covers all six core areas, then User Stories, Out of scope, and Prior-art tests
- [ ] Domain concepts use the glossary's words; gaps are noted for domain-modeling
- [ ] Every prototype snippet in the spec is trimmed to the decision and marked as from a prototype
- [ ] The human has reviewed and approved the spec
- [ ] Success criteria are specific and testable
- [ ] Boundaries (Always/Ask First/Never) are defined
- [ ] The spec is `spec.md` in a spec folder that `brain new-doc SPEC` created, its `sources:` lists every IDEA, DEC and RES file it comes from, and `brain check` reports no finding for it
- [ ] If the request bundles several independently testable capabilities, a capability map (module ids, dependency direction, build order) was approved and recorded as a decision record before any module spec was written
- [ ] Every module spec traces to a module id in the approved capability map: the id is its folder's slug, and the capability map's decision record is in its `sources:`
