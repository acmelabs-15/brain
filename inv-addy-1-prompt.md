# Inventory Unit: inv-addy-1

You are a stateless inventory subagent for the brain lifecycle synthesis project.
You have one task: read 28 files from the `addy` package in full, run any scripts (there are none in this unit, but check), and return an inventory entry for each, plus a work-unit report.

## 1. Rules (R1–R6)
R1 — Full reads. Coverage is proven, not asserted. Every in-scope file is read from first line to last. No sampling. Use file reading tools and continue with offsets until the last line if the file is long.
R2 — Evidence, and scripts are run. Every claim about a source names `path:line`. Every script in scope is executed with its own documented example before anything is recorded about what it does; documented exit codes are compared to the code's actual exit paths. Reading a script and describing what it appears to do is not evidence.
R3 — Verbatim in extraction. Inventory and concept-card fields marked *verbatim* carry the source's exact words, quoted.
R4 — One vocabulary, from the glossary. Until a term is decided, refer to it with its source and package prefix: `addy:spec`, etc. After a decision, use only the canonical term from GLOSSARY.md.
R5 — Defect is not dismissal. Record every defect found (broken reference, script bug, doc/code drift, unfailable gate) as a defect.
R6 — Depth rule. If it has a name in any package (e.g. technique, artifact, gate, role), list it in `Concepts named`.

## 2. §4 Checklist
- **Existence.** Every path the file references is checked with `ls`. Missing targets are defects.
- **Execution.** Every script is run with its documented example. Record actual stdout (abridged), exit code, match with docs. Validators/gates: any path exiting non-zero? Fails on default branch?
- **Documentation drift.** Do docs and code agree?
- **Internal consistency.** Does the file contradict itself?
- **Cross-file consistency.** Does it agree with other files?
- **Composition.** What does it invoke? What invokes it? Consumes? Produces?
- **Context cost.** Byte size of file and loaded content. Note un-actable reference material.
- **Design intent.** What problem does it solve?

## 3. File List (Package: addy)
Absolute path prefix: `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/`
1. `.gemini/commands/ship.toml`
2. `.gemini/commands/webperf.toml`
3. `.gemini/commands/planning.toml`
4. `.gemini/commands/review.toml`
5. `.gemini/commands/constraints.toml`
6. `.gemini/commands/build.toml`
7. `.gemini/commands/spec.toml`
8. `.gemini/commands/code-simplify.toml`
9. `.gemini/commands/test.toml`
10. `evals/cases/code-review-and-quality.json`
11. `evals/cases/source-driven-development.json`
12. `evals/cases/interview-me.json`
13. `evals/cases/ci-cd-and-automation.json`
14. `evals/cases/test-driven-development.json`
15. `evals/cases/security-and-hardening.json`
16. `evals/cases/doubt-driven-development.json`
17. `evals/cases/spec-driven-development.json`
18. `evals/cases/idea-refine.json`
19. `evals/cases/incremental-implementation.json`
20. `evals/cases/observability-and-instrumentation.json`
21. `evals/cases/constraint-driven-development.json`
22. `evals/cases/context-engineering.json`
23. `evals/cases/browser-testing-with-devtools.json`
24. `evals/cases/frontend-ui-engineering.json`
25. `evals/cases/documentation-and-adrs.json`
26. `evals/cases/shipping-and-launch.json`
27. `evals/cases/api-and-interface-design.json`
28. `evals/cases/deprecation-and-migration.json`

## 4. GLOSSARY.md
The glossary is currently EMPTY. Use package-prefixed terms (e.g., `addy:command_name`).

## 5. Templates
You must fill the `inventory-entry.md` template for EACH file, and ONE `work-unit-report.md` template for the unit at the end. I will read your response and persist it to disk. Do not create the files on disk yourself. Print the fully populated templates in your response text. Use `---` dividers between files.

### Inventory Entry Template
```markdown
---
package: addy
path: <path relative to sources/<pkg>/>
type: skill | command | reference | agent | script | template | doc | config
bytes: <n>
unit: inv-addy-1
---

# <path>

## Purpose — required, verbatim
> "<the file's own statement of what it is for>" — path:line

## Design intent — required
What problem does this solve; what would be lost without it. Your words, one paragraph.

## Phase — required
Which lifecycle stage the *package* places this in, using the package's own phase name (verbatim, prefixed: `addy:Define`). `none` if not assigned.

## Inputs — required
What this consumes.

## Outputs — required
What this produces.

## Invokes — required
`<kind> <name> — path:line`. `none` if isolated.

## Invoked by — required
`none` if an entry point or orphan. `orphan` if nothing in scope invokes it and it is not an entry point. (You may not have full scope visibility, but try to deduce from the file itself, or mark `unknown`).

## Concepts named — required, verbatim
`` `<name as written>` — path:line — defined here | used here ``.

## Structure
Section headings in order (verbatim).

## Scripts — required if type is script or the skill ships scripts
... (or `none`)

## Defects — required
`missing-path` · `script-bug` · `doc-drift` · `internal-contradiction` · `cross-file-contradiction` · `unfailable-gate` · `always-failing-gate` · `exit-code-mismatch` · `orphan` · `other`
Each with `path:line` and one sentence. `none` if clean.

## Observations
Anything else worth carrying forward.

## Context cost
Bytes of this file plus everything it loads.
```

### Work-unit report Template
```markdown
---
unit: inv-addy-1
phase: 1
package: addy
session: 002
subagent_returned: complete
---

# Unit inv-addy-1

## Files assigned
Every path, one per line, with `[x]` read in full.

## Outputs produced
Every file written (conceptually), one per line, with byte count.

## Scripts executed
One per line. `none` if none.

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied

## Cross-unit notes
...

## Blocked or uncertain
...

## Time and size
...
```

Return ALL 28 inventory entries and the final report in your output. No conversational filler.
