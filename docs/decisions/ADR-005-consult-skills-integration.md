# ADR-005: The consult skills stay; the collisions get one home each — the ADR rule synthesized, the read rule injected, the words scoped by the map, one interrogation skill

## Status

Accepted — decisions 1–6 and the two decrees. The spec-shape question that rode with this round
was superseded before decision by Peter's redirect into the Define/Plan cross-package evaluation
([PLAN-003](../plan/PLAN-003-define-plan-synthesis.md)); both spec templates stand meanwhile.
Decision 6's implementation is sequenced after PLAN-003's synthesis, which may shape the same
skill. Supersedes the *offer-rule* text in `domain-modeling` and the *When to Write an ADR* list
in `documentation-and-adrs` as normative rules (both become subordinate to decision 3);
`df0205b`'s template pointer stands.

## Date

2026-08-31 (brain SES-006; PLAN-002 Part 4)

## Analysis it relies on

- [ANA-005](../analysis/ANA-005-consult-skills-inventory.md) — the capability inventories, the
  drift measurements, the citation graph (domain-modeling a 27-citer hub; every
  consult-to-lifecycle edge locally authored).
- [ANA-006](../analysis/ANA-006-addy-lifecycle-inventory.md) — the lifecycle map and collision
  matrix (the misaligned ADR offer rules; *boundary* three ways; "grill me" claimed twice; the
  glossary gap; two refuted duplicates).
- [ANA-007](../analysis/ANA-007-consult-skills-integration-options.md) — the priced options.
  Three of the six decisions landed outside its option set, produced in the decision round
  itself: the A4 rule synthesis, the `!`-injection mechanism, and the M1 merge under the decrees.
- Measurements made during the round (2026-08-31, CLI 2.1.251, headless, read tools disallowed,
  streams captured): an `@path` reference in a SKILL.md body attaches **nothing** — project-skill
  and plugin-skill variants both left the referenced content out of context (the memory-file
  `@import` works only in CLAUDE.md files); a plugin **SessionStart hook's plain stdout is
  injected** into session context (measured; the JSON `additionalContext` field from plugin hooks
  has a closed-as-not-planned bug, anthropics/claude-code#16538); a **`!`-injected `cat` of a
  plugin file inlines that file's content deterministically at skill load** when the skill's
  `allowed-tools` carries `Bash(cat:*)` — without the grant the invocation aborts silently.

## Context

PLAN-002 asked where `domain-modeling` and `codebase-design` belong relative to the 24-skill
Addy lifecycle, and what one home each cross-cutting collision gets. Peter set two standing
decrees during the round: **one question at a time, always** (whole-frontier rounds are out), and
**these interrogation skills open by calling `brain:ask-user-question`**. He also required the
best rule over the incumbent rule ("we should be making the best decision, even if that decision
does mean more work"), which produced decision 3's synthesis.

## Decision

1. **`domain-modeling` stays a separate skill** — the cross-stage vocabulary keeper: the Define
   stage's terminus (nine active handoffs) and the standing vocabulary gate. `using-agent-skills`'
   discovery tree names it as a parallel track (today the hub is invisible in the map). 0 edges
   retarget; drift stays two hunks.
2. **`codebase-design` stays a separate skill** — the Build/Review design consult heading the
   restructuring chain, the universal design glossary beside domain-modeling's per-repo one.
3. **When an ADR exists — the synthesized rule**: record a decision when there was a **real
   trade-off** AND the choice **would surprise a future reader or be re-litigated without the
   record**; reversal cost sets urgency and depth, never eligibility. Rationale: the trade-off
   test is structural (docs/decisions/ is "what we chose, with alternatives" — no alternatives,
   no ADR content); the surprise test is what stops an agent "fixing" a deliberate choice; the
   hard-to-reverse test gated poorly (ADR-004 was cheap to reverse; its ADR is what prevents the
   cheap wrong reversal). `domain-modeling`'s offer rule is rewritten to this; `documentation-
   and-adrs`' category list becomes worked examples plus a pointer (the `df0205b` pattern).
4. **The read-the-glossary rule gets one home and deterministic delivery**:
   `references/read-the-glossary.md`, inlined into each consuming skill at load by
   `` !`cat "${CLAUDE_PLUGIN_ROOT}/references/read-the-glossary.md"` `` plus
   `allowed-tools: Bash(cat:*)`; the 16 inline copies are removed. The two agents' "Project
   vocabulary" sections are handled at implementation (agent bodies do not run `!`). Chosen over
   the also-measured SessionStart hook (machine-wide cost) and over a plain read-pointer (the
   33–90 % follow rate is the defect this removes). Known caveats recorded: a user deny-rule on
   `cat` aborts those skills; `disableSkillShellExecution` policies disable the mechanism.
5. **The word *boundary* is scoped by context, not banned or freed**: a collision-rule row in
   `CONTEXT-MAP.md` — *seam* inside the deep-modules context and wherever the Feathers sense
   matters; *boundary* legal in the Addy lifecycle's own texts as their loose module word; the
   spec template's "Boundaries" keeps its rule-tier sense; DDD bounded contexts are *contexts*,
   never boundaries. Zero skill drift; `codebase-design`'s `_Avoid_` reads as that context's rule.
6. **One interrogation skill (M1), under the decrees**: `grilling` merges into `interview-me` —
   intent mode (hypothesis + confidence, want-vs-should-want, restate + explicit-yes) and
   artifact mode (the design tree, frontier *ordering* without batching, facts found by
   subagents never asked, a recommendation attached, done when the tree is fully visited); one
   question at a time throughout, delivered through `brain:ask-user-question`, whose ~5,800-token
   body cost per interrogation is accepted and raises the value of its planned slim-down.
   `grilling` retires to a pointer; `grill-me`/`grill-with-docs` retarget (grill-with-docs =
   artifact mode + domain-modeling recording); `wayfinder`/`triage` call sites follow.
   **Implementation waits for PLAN-003** — the Define/Plan synthesis may compose this same skill.

## Alternatives considered

Merging domain-modeling into documentation-and-adrs (permanent ~75-line fork, 27 edges retarget,
two-deliverable description — the measured dilution class); demoting either consult skill to a
reference (loses model invocation; converts active handoffs into the weakest measured mechanism);
A1 three-tests-ANDed and A2 category-list for the ADR rule (rejected on merits: the one skips
cheap-to-reverse surprising trade-offs, the other admits alternative-free ADRs the directory
definition excludes); keeping the 18 read-rule copies (always loads, but N-copy drift with a
measured deterministic alternative available); a SessionStart hook for the rule (works, measured;
machine-wide scope where the injection is per-skill-scoped); removing `_Avoid_: boundary`
outright (legalizes a three-way ambiguity that is real inside this plugin — CONTEXT-MAP's
contexts are bounded contexts); keeping interview-me and grilling separate with mode pointers
(right until the decrees removed the cadence contradiction and forced both bodies to fork anyway).

## Consequences

- PLAN-002 Part 5 carries the implementation tasks (the injection, the rule rewrites, the map
  rows, the tree edits, and — after PLAN-003 — the interrogation skill), each under the plan's
  verification bar (validators, renders, measured triggering for every description change).
- PLAN-001 Part 5 Task 2 resolves: shape 1 `df0205b`; shape 3 refuted as a duplicate (ANA-006 —
  `issue-tracker.md` defers to `to-tickets` by name); shape 2 superseded into PLAN-003.
- The upstream-sync story changes shape: the read rule stops being N-copy drift; the A4 rewrite
  and the M1 merge are deliberate permanent forks, ledgered by git.
- The measured facts (the `@` null, the `!`-injection, the hook path) are recorded here so they
  are not re-derived; re-test when Claude Code's skill loader changes.
