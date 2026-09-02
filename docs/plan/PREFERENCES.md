# PREFERENCES — Peter's stated inputs

Read-only for the agent. Only things Peter has stated directly. No analysis, no leanings, no third-party conclusions. These are **inputs to Phase 4**, not decisions: when a decision follows one, cite it; when a decision goes against one, cite it and give the evidence.

Two tags:

- **[preference]** — Peter wants this.
- **[observation]** — Peter noticed this about the sources. Verify it in Phase 1 like any other claim.

---

## Approach

- **[preference]** Favours Addy's overall approach to the lifecycle as the starting frame.
- **[preference]** There are things in Matt's package that Addy's does not have and that are worth bringing over, and things Matt does that are better than Addy's version.
- **[preference]** Synthesis is granular — parts of skills, as large or small as makes sense — not whole skills traded against each other.
- **[preference]** Drawn to some of rjm's naming and to some of its skill composition and organisation choices.
- **[preference]** Result must be compatible with the rest of brain.

## References

- **[preference]** Addy's root `references/` directory holds critical definitions the other two packages do not organise this way. The most important: `definition-of-done.md`, `orchestration-patterns.md`, `performance-checklist.md`, `testing-patterns.md`.
- **[preference]** Some of those references should become part of the lifecycle, updated to fit the new skills rather than carried over as-is.
- **[preference]** `definition-of-done.md` should be part of the build phase in some form.

## Phase mapping as Peter reads the sources

- **[observation]** Addy — Define: `interview-me`, `idea-refine`, `spec-driven-development`. Plan: `planning-and-task-breakdown`. Build: `implement-spec`, `incremental-implementation`.
- **[observation]** Matt — Define (no command exists; these are the skills one would compose): `grill-with-docs` / `wayfinder`, `research`. Plan: `to-spec`, `to-tickets`. Build: `implement`. Matt also has `implement-spec` under `skills/in-progress/`.
- **[observation]** Both Addy and Matt have a task template with Description, Acceptance Criteria, and Dependencies. Addy's `planning-and-task-breakdown` saves to `docs/tasks/plan.md` and to an external tracker named in the project's `CLAUDE.md`; Matt's `to-tickets` saves to `docs/agents/issue-tracker.md`.
- **[preference]** In Addy's `planning-and-task-breakdown` task list, Peter prefers **"phase"** over **"part"** as the grouping word.

## Depth

- **[preference]** Alignment goes down to named techniques and criteria. Example from Peter: Addy's `idea-refine/frameworks.md` defines constraint-based ideation, JTBD, first-principles thinking, HMW; its `refinement-criteria.md` defines feasibility, differentiation, assumption audit, and more. Where the other packages define the same or similar things under any name, each is to be identified, aligned on definition, and aligned on when and where it is applied.

## Constraints

- **[preference]** Do not push the agent toward or away from any package based on prior audits or anyone's opinions. Problems are found through the analysis itself.
- **[preference]** A found defect is not grounds to dismiss the surrounding design (D-006).
- **[preference]** No Node, no Python (D-003).
