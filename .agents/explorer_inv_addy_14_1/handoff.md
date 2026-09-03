# Handoff Report: Explorer 1 (inv-addy-14)

## 1. Observation

### 1.1 Scope and Environment
- Assigned files in unit `inv-addy-14`:
  1. `sources/addy/skills/incremental-implementation/SKILL.md` (9,507 bytes, 250 lines)
  2. `sources/addy/skills/api-and-interface-design/SKILL.md` (14,884 bytes, 368 lines)
- Total source inspected: 24,391 bytes across 2 files, read completely from line 1 to end without sampling per METHOD.md R1.
- Repository status: Working branch is `v2` at commit matching pinned SHA `d2c37ef6225dd8726cdd369a8030307f48592d26` for `addy`.
- Zero scripts exist within either skill directory (`sources/addy/skills/incremental-implementation/` contains only `SKILL.md`; `sources/addy/skills/api-and-interface-design/` contains only `SKILL.md`).

### 1.2 Path Verifications (§4 Checklist)
All cross-referenced paths were inspected on disk using `ls -la`:
- `sources/addy/skills/incremental-implementation/SKILL.md:41` references `git-workflow-and-versioning` → `sources/addy/skills/git-workflow-and-versioning/SKILL.md` exists (14,063 bytes).
- `sources/addy/skills/incremental-implementation/SKILL.md:201` references `test-driven-development` skill's "Discover the Stack First" section → `sources/addy/skills/test-driven-development/SKILL.md` exists (16,483 bytes) and contains `## Discover the Stack First` at line 24.
- `sources/addy/skills/incremental-implementation/SKILL.md:249` references `../../references/definition-of-done.md` → `sources/addy/references/definition-of-done.md` exists (3,798 bytes).
- `sources/addy/skills/api-and-interface-design/SKILL.md:30` references `deprecation-and-migration` → `sources/addy/skills/deprecation-and-migration/SKILL.md` exists (12,516 bytes).

### 1.3 Invocation Graph Tracing
Neither file is an orphan:
- `incremental-implementation` is referenced/invoked by:
  - `commands/build.toml:4`
  - `CLAUDE.md:23` (Build phase)
  - `AGENTS.md:26`, `AGENTS.md:42` (Build phase)
  - `skills/using-agent-skills/SKILL.md:24, 137, 152, 174` (Build phase)
  - `skills/spec-driven-development/SKILL.md:202`
  - `skills/deprecation-and-migration/SKILL.md:183`
  - `references/definition-of-done.md:3`
  - `docs/getting-started.md:62, 113, 114`
  - `docs/adoption-guide.md:41`
  - `docs/antigravity-setup.md:54, 91`
  - `docs/cursor-setup.md:147, 157`
  - `docs/gemini-cli-setup.md:44, 55, 68`
  - `docs/opencode-setup.md:64, 69, 116, 159, 170`
  - `docs/windsurf-setup.md:13, 37`
  - `README.md:249, 358`
  - `scripts/validate-reference-links-test.js:127`
  - `evals/cases/incremental-implementation.json:2, 35`
- `api-and-interface-design` is referenced/invoked by:
  - `CLAUDE.md:23` (Build phase)
  - `AGENTS.md:31` (Build phase)
  - `skills/using-agent-skills/SKILL.md:26, 179` (Build phase)
  - `skills/spec-driven-development/SKILL.md:61`
  - `skills/git-workflow-and-versioning/SKILL.md:284`
  - `docs/adoption-guide.md:59, 99`
  - `docs/cursor-setup.md:147, 157`
  - `docs/opencode-setup.md:121`
  - `README.md:40, 255, 364`
  - `evals/cases/api-and-interface-design.json:2, 35`
  - `evals/cases/performance-optimization.json:33`

---

## 2. Logic Chain

1. **Rule R1 & R2 Compliance:** Both files were read line-by-line without truncating or sampling (Obs 1.1). Neither file contains executable scripts in its directory (Obs 1.1); all commands mentioned in text (`npm test`, `pytest`, `npx tsc --noEmit`) are generic examples of user-repository commands rather than packaged scripts.
2. **Defect Verification (§4 Checklist):**
   - Every file path and relative path mentioned was verified with `ls -la` and confirmed to resolve to real files on disk (Obs 1.2).
   - No broken paths (`missing-path`), documentation drift (`doc-drift`), internal contradictions (`internal-contradiction`), cross-file contradictions (`cross-file-contradiction`), or orphan conditions (`orphan`) were detected (Obs 1.2, Obs 1.3).
   - Defect status for both entries is strictly `none`.
3. **Phase Assignment:** Cross-referencing `CLAUDE.md:23`, `AGENTS.md:26, 31, 42`, `README.md:358, 364`, and `using-agent-skills/SKILL.md:174, 179` definitively establishes that both skills belong to the `addy:Build` lifecycle phase.
4. **Concept Extraction (R6 Depth Rule):** Every named rule, pattern, principle, checklist, and artifact in both files was isolated with verbatim text and exact line references.

---

## 3. Caveats

- Neither skill contains internal executable scripts or unit tests under `sources/addy/skills/<skill>/`; their quality is evaluated via static markdown checks and evaluation cases (`evals/cases/*.json`), which were inventoried in previous units.
- External documentation snapshots at `sources/addy-external/incremental-implementation.md` and `sources/addy-external/api-and-interface-design.md` are separate manifest rows assigned to other units/explorers.
- No caveats regarding completeness of reading or field extraction.

---

## 4. Conclusion & Inventory Entries

Both files are fully inventoried, clean of defects, and formatted strictly according to `docs/plan/templates/inventory-entry.md`.

Below are the complete inventory entries for both files:

---

### Inventory Entry 1: `skills/incremental-implementation/SKILL.md`

```markdown
---
package: addy
path: skills/incremental-implementation/SKILL.md
type: skill
bytes: 9507
unit: inv-addy-14
---

# skills/incremental-implementation/SKILL.md

## Purpose — required, verbatim
> "Build in thin vertical slices — implement one piece, test it, verify it, then expand." — skills/incremental-implementation/SKILL.md:10

## Design intent — required
Incremental implementation provides an execution discipline for multi-file changes that counters the tendency of developers and autonomous agents to write large batches of code at once before verifying. By enforcing thin vertical slices (or contract-first / risk-first slices) where each change is bounded, tested, verified, and committed before proceeding, it prevents compounding errors, maintains continuous buildability/compilability, and ensures rollback-friendly, atomic git progression. Without it, agents and developers generate massive unverified diffs that break environments, obscure root causes of bugs, and cannot be cleanly reverted or reviewed.

## Phase — required
addy:Build

## Inputs — required
- Task breakdown or plan item (e.g. from `planning-and-task-breakdown` or `spec-driven-development`) (`skills/incremental-implementation/SKILL.md:15`, `skills/incremental-implementation/SKILL.md:188`)
- Repository test suite commands (`npm test`, `./gradlew test`, `pytest`, etc.) (`skills/incremental-implementation/SKILL.md:39`, `skills/incremental-implementation/SKILL.md:204`)
- Repository build and type-checking commands (`npx tsc --noEmit`, `mypy`, etc.) (`skills/incremental-implementation/SKILL.md:144`, `skills/incremental-implementation/SKILL.md:205-206`)
- Repository linting commands (`skills/incremental-implementation/SKILL.md:207`)
- Project-wide Definition of Done reference (`skills/incremental-implementation/SKILL.md:249`)
- Explicit task instructions detailing what is in scope and out of scope (`skills/incremental-implementation/SKILL.md:187-197`)

## Outputs — required
- Working code increments delivered in thin vertical slices leaving the system in a compilable, testable state (`skills/incremental-implementation/SKILL.md:10`, `skills/incremental-implementation/SKILL.md:38`)
- Tests covering new functionality (`skills/incremental-implementation/SKILL.md:39`)
- Atomic, descriptive git commits per slice (`skills/incremental-implementation/SKILL.md:41`, `skills/incremental-implementation/SKILL.md:141`)
- Out-of-scope backlog notes ("NOTICED BUT NOT TOUCHING") to prevent scope creep (`skills/incremental-implementation/SKILL.md:129-133`)
- Feature flags for work-in-progress code (`skills/incremental-implementation/SKILL.md:151-160`)
- Rollback migrations for database changes (`skills/incremental-implementation/SKILL.md:180`)

## Invokes — required
- skill git-workflow-and-versioning — skills/incremental-implementation/SKILL.md:41
- skill test-driven-development — skills/incremental-implementation/SKILL.md:201
- reference ../../references/definition-of-done.md — skills/incremental-implementation/SKILL.md:249

## Invoked by — required
- command commands/build.toml — commands/build.toml:4
- doc CLAUDE.md — CLAUDE.md:23
- doc AGENTS.md — AGENTS.md:26, AGENTS.md:42
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:24, skills/using-agent-skills/SKILL.md:137, skills/using-agent-skills/SKILL.md:152, skills/using-agent-skills/SKILL.md:174
- skill skills/spec-driven-development/SKILL.md — skills/spec-driven-development/SKILL.md:202
- skill skills/deprecation-and-migration/SKILL.md — skills/deprecation-and-migration/SKILL.md:183
- reference references/definition-of-done.md — references/definition-of-done.md:3
- doc docs/getting-started.md — docs/getting-started.md:62, docs/getting-started.md:113, docs/getting-started.md:114
- doc docs/adoption-guide.md — docs/adoption-guide.md:41
- doc docs/antigravity-setup.md — docs/antigravity-setup.md:54, docs/antigravity-setup.md:91
- doc docs/cursor-setup.md — docs/cursor-setup.md:147, docs/cursor-setup.md:157
- doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:44, docs/gemini-cli-setup.md:55, docs/gemini-cli-setup.md:68
- doc docs/opencode-setup.md — docs/opencode-setup.md:64, docs/opencode-setup.md:69, docs/opencode-setup.md:116, docs/opencode-setup.md:159, docs/opencode-setup.md:170
- doc docs/windsurf-setup.md — docs/windsurf-setup.md:13, docs/windsurf-setup.md:37
- doc README.md — README.md:249, README.md:358
- script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:127
- config evals/cases/incremental-implementation.json — evals/cases/incremental-implementation.json:2, evals/cases/incremental-implementation.json:35

## Concepts named — required, verbatim
- `thin vertical slices` — skills/incremental-implementation/SKILL.md:10 — defined here
- `execution discipline` — skills/incremental-implementation/SKILL.md:10 — defined here
- `task breakdown` — skills/incremental-implementation/SKILL.md:15 — used here
- `The Increment Cycle` — skills/incremental-implementation/SKILL.md:21 — defined here
- `Implement` — skills/incremental-implementation/SKILL.md:38 — defined here
- `Test` — skills/incremental-implementation/SKILL.md:39 — defined here
- `Verify` — skills/incremental-implementation/SKILL.md:40 — defined here
- `Commit` — skills/incremental-implementation/SKILL.md:41 — used here
- `atomic commit` — skills/incremental-implementation/SKILL.md:41 — used here
- `Next slice` — skills/incremental-implementation/SKILL.md:42 — defined here
- `Slicing Strategies` — skills/incremental-implementation/SKILL.md:44 — defined here
- `Vertical Slices` — skills/incremental-implementation/SKILL.md:46 — defined here
- `Contract-First Slicing` — skills/incremental-implementation/SKILL.md:66 — defined here
- `API contract` — skills/incremental-implementation/SKILL.md:71 — used here
- `OpenAPI spec` — skills/incremental-implementation/SKILL.md:71 — used here
- `mock data` — skills/incremental-implementation/SKILL.md:73 — used here
- `Risk-First Slicing` — skills/incremental-implementation/SKILL.md:77 — defined here
- `Implementation Rules` — skills/incremental-implementation/SKILL.md:89 — defined here
- `Rule 0: Simplicity First` — skills/incremental-implementation/SKILL.md:91 — defined here
- `SIMPLICITY CHECK` — skills/incremental-implementation/SKILL.md:102 — defined here
- `Generic EventBus with middleware pipeline` — skills/incremental-implementation/SKILL.md:103 — used here
- `Abstract factory pattern` — skills/incremental-implementation/SKILL.md:106 — used here
- `Config-driven form builder` — skills/incremental-implementation/SKILL.md:109 — used here
- `premature abstraction` — skills/incremental-implementation/SKILL.md:113 — used here
- `Rule 0.5: Scope Discipline` — skills/incremental-implementation/SKILL.md:115 — defined here
- `NOTICED BUT NOT TOUCHING` — skills/incremental-implementation/SKILL.md:128 — defined here
- `Rule 1: One Thing at a Time` — skills/incremental-implementation/SKILL.md:135 — defined here
- `Rule 2: Keep It Compilable` — skills/incremental-implementation/SKILL.md:143 — defined here
- `Rule 3: Feature Flags for Incomplete Features` — skills/incremental-implementation/SKILL.md:147 — defined here
- `Rule 4: Safe Defaults` — skills/incremental-implementation/SKILL.md:162 — defined here
- `Rule 5: Rollback-Friendly` — skills/incremental-implementation/SKILL.md:174 — defined here
- `Additive changes` — skills/incremental-implementation/SKILL.md:178 — defined here
- `rollback migrations` — skills/incremental-implementation/SKILL.md:180 — used here
- `Working with Agents` — skills/incremental-implementation/SKILL.md:183 — defined here
- `Increment Checklist` — skills/incremental-implementation/SKILL.md:199 — defined here
- `Discover the Stack First` — skills/incremental-implementation/SKILL.md:201 — used here
- `Common Rationalizations` — skills/incremental-implementation/SKILL.md:213 — defined here
- `Red Flags` — skills/incremental-implementation/SKILL.md:224 — defined here
- `Verification` — skills/incremental-implementation/SKILL.md:237 — defined here
- `Definition of Done` — skills/incremental-implementation/SKILL.md:249 — used here
- `acceptance criteria` — skills/incremental-implementation/SKILL.md:249 — used here

## Structure
# Incremental Implementation
## Overview
## When to Use
## The Increment Cycle
## Slicing Strategies
### Vertical Slices (Preferred)
### Contract-First Slicing
### Risk-First Slicing
## Implementation Rules
### Rule 0: Simplicity First
### Rule 0.5: Scope Discipline
### Rule 1: One Thing at a Time
### Rule 2: Keep It Compilable
### Rule 3: Feature Flags for Incomplete Features
### Rule 4: Safe Defaults
### Rule 5: Rollback-Friendly
## Working with Agents
## Increment Checklist
## Common Rationalizations
## Red Flags
## Verification
## See Also

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- **NOTICED BUT NOT TOUCHING Protocol:** Section 0.5 (lines 128-134) establishes an exemplary discipline for autonomous coding agents by prescribing an exact reporting syntax for out-of-scope code defects observed during implementation. This prevents runaway scope expansion while capturing technical debt.
- **Anti-Reassurance Rule:** The skill explicitly prohibits re-running verification commands when code has not changed ("Running the same build/test command twice in a row without any intervening code change", lines 211, 222, 235), directly tackling a frequent LLM looping failure mode.
- **Three Slicing Paradigms:** The formalization of Vertical Slices (end-to-end), Contract-First Slicing (parallel frontend/backend), and Risk-First Slicing (uncertainty reduction) provides a versatile model for dividing work units.

## Context cost
9,507 bytes (SKILL.md itself, ~2,377 tokens). Direct references add 34,342 bytes (`git-workflow-and-versioning`: 14,063 bytes, `test-driven-development`: 16,483 bytes, `definition-of-done.md`: 3,798 bytes), bringing total reachable context to 43,849 bytes (~10,962 tokens).
```

---

### Inventory Entry 2: `skills/api-and-interface-design/SKILL.md`

```markdown
---
package: addy
path: skills/api-and-interface-design/SKILL.md
type: skill
bytes: 14884
unit: inv-addy-14
---

# skills/api-and-interface-design/SKILL.md

## Purpose — required, verbatim
> "Design stable, well-documented interfaces that are hard to misuse." — skills/api-and-interface-design/SKILL.md:10

## Design intent — required
API and interface design establishes foundational architectural rules for public interfaces, inter-module boundaries, and data exchanges. Grounded in Hyrum's Law (that all observable behaviors become de facto commitments) and the One-Version Rule, it enforces contract-first specification, boundary validation (treating external and third-party data as untrusted while trusting internal code), consistent error shapes, additive backward compatibility, and rigorous idempotency semantics (atomic unique-constraint key claims, payload hashing, and retention outliving DLQ/retry windows). Without it, teams and agents create fragile, leaky interfaces with ad-hoc error formats, TOCTOU race conditions on retryable operations, and breaking changes that disrupt consumers.

## Phase — required
addy:Build

## Inputs — required
- Functional requirements, service briefs, and domain entities (`skills/api-and-interface-design/SKILL.md:14-18`)
- Existing interface definitions, database schemas, and inter-module dependencies (`skills/api-and-interface-design/SKILL.md:15-18`)
- Third-party API payload structures and responses (`skills/api-and-interface-design/SKILL.md:115-118`)
- Deprecation guidance from `deprecation-and-migration` (`skills/api-and-interface-design/SKILL.md:30`)

## Outputs — required
- Type contracts, interface declarations, and API specifications (TypeScript interfaces, OpenAPI specs, GraphQL schemas, Zod schemas) (`skills/api-and-interface-design/SKILL.md:39-59`, `skills/api-and-interface-design/SKILL.md:94-104`, `skills/api-and-interface-design/SKILL.md:273-321`)
- Standardized, machine-readable error schemas and HTTP status code mappings (`skills/api-and-interface-design/SKILL.md:65-84`)
- Boundary validators and sanitizers (e.g. `CreateTaskSchema.safeParse`) (`skills/api-and-interface-design/SKILL.md:94-118`)
- Idempotency mechanisms: unique constraint database schemas, atomic claim handlers, payload hash guards, and retry lifecycle policies (`skills/api-and-interface-design/SKILL.md:156-216`)
- REST endpoint specifications with resource nesting, query parameter conventions, pagination schemas, and partial update (PATCH) contracts (`skills/api-and-interface-design/SKILL.md:218-269`)

## Invokes — required
- skill deprecation-and-migration — skills/api-and-interface-design/SKILL.md:30

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:23
- doc AGENTS.md — AGENTS.md:31
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:26, skills/using-agent-skills/SKILL.md:179
- skill skills/spec-driven-development/SKILL.md — skills/spec-driven-development/SKILL.md:61
- skill skills/git-workflow-and-versioning/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:284
- doc README.md — README.md:40, README.md:255, README.md:364
- doc docs/adoption-guide.md — docs/adoption-guide.md:59, docs/adoption-guide.md:99
- doc docs/cursor-setup.md — docs/cursor-setup.md:147, docs/cursor-setup.md:157
- doc docs/opencode-setup.md — docs/opencode-setup.md:121
- config evals/cases/api-and-interface-design.json — evals/cases/api-and-interface-design.json:2, evals/cases/api-and-interface-design.json:35
- config evals/cases/performance-optimization.json — evals/cases/performance-optimization.json:33

## Concepts named — required, verbatim
- `stable, well-documented interfaces` — skills/api-and-interface-design/SKILL.md:10 — defined here
- `Core Principles` — skills/api-and-interface-design/SKILL.md:20 — defined here
- `Hyrum's Law` — skills/api-and-interface-design/SKILL.md:22 — defined here
- `The One-Version Rule` — skills/api-and-interface-design/SKILL.md:33 — defined here
- `Diamond dependency problems` — skills/api-and-interface-design/SKILL.md:34 — used here
- `Contract First` — skills/api-and-interface-design/SKILL.md:37 — defined here
- `Consistent Error Semantics` — skills/api-and-interface-design/SKILL.md:61 — defined here
- `APIError` — skills/api-and-interface-design/SKILL.md:68 — defined here
- `Status code mapping` — skills/api-and-interface-design/SKILL.md:76 — defined here
- `Validate at Boundaries` — skills/api-and-interface-design/SKILL.md:88 — defined here
- `untrusted data` — skills/api-and-interface-design/SKILL.md:115 — defined here
- `Prefer Addition Over Modification` — skills/api-and-interface-design/SKILL.md:125 — defined here
- `Predictable Naming` — skills/api-and-interface-design/SKILL.md:146 — defined here
- `Honouring an Idempotency Key` — skills/api-and-interface-design/SKILL.md:156 — defined here
- `Idempotency-Key` — skills/api-and-interface-design/SKILL.md:158 — defined here
- `TOCTOU` — skills/api-and-interface-design/SKILL.md:176 — used here
- `unique constraint` — skills/api-and-interface-design/SKILL.md:182 — defined here
- `Guard the payload` — skills/api-and-interface-design/SKILL.md:195 — defined here
- `requestHash` — skills/api-and-interface-design/SKILL.md:198 — defined here
- `in-flight duplicate` — skills/api-and-interface-design/SKILL.md:203 — defined here
- `retry storms` — skills/api-and-interface-design/SKILL.md:203 — used here
- `three outcomes: success, failure, and unknown` — skills/api-and-interface-design/SKILL.md:212 — defined here
- `record the intent before calling out` — skills/api-and-interface-design/SKILL.md:214 — defined here
- `longest retry chain` — skills/api-and-interface-design/SKILL.md:215 — defined here
- `dead-letter queue` — skills/api-and-interface-design/SKILL.md:215 — used here
- `REST API Patterns` — skills/api-and-interface-design/SKILL.md:217 — defined here
- `Resource Design` — skills/api-and-interface-design/SKILL.md:219 — defined here
- `Pagination` — skills/api-and-interface-design/SKILL.md:232 — defined here
- `Filtering` — skills/api-and-interface-design/SKILL.md:252 — defined here
- `Partial Updates (PATCH)` — skills/api-and-interface-design/SKILL.md:260 — defined here
- `TypeScript Interface Patterns` — skills/api-and-interface-design/SKILL.md:270 — defined here
- `Discriminated Unions for Variants` — skills/api-and-interface-design/SKILL.md:272 — defined here
- `Input/Output Separation` — skills/api-and-interface-design/SKILL.md:293 — defined here
- `Branded Types for IDs` — skills/api-and-interface-design/SKILL.md:313 — defined here
- `Common Rationalizations` — skills/api-and-interface-design/SKILL.md:323 — defined here
- `at-least-once with idempotent processing` — skills/api-and-interface-design/SKILL.md:335 — defined here
- `Red Flags` — skills/api-and-interface-design/SKILL.md:338 — defined here
- `Verification` — skills/api-and-interface-design/SKILL.md:352 — defined here

## Structure
# API and Interface Design
## Overview
## When to Use
## Core Principles
### Hyrum's Law
### The One-Version Rule
### 1. Contract First
### 2. Consistent Error Semantics
### 3. Validate at Boundaries
### 4. Prefer Addition Over Modification
### 5. Predictable Naming
### 6. Honouring an Idempotency Key
## REST API Patterns
### Resource Design
### Pagination
### Filtering
### Partial Updates (PATCH)
## TypeScript Interface Patterns
### Use Discriminated Unions for Variants
### Input/Output Separation
### Use Branded Types for IDs
## Common Rationalizations
## Red Flags
## Verification

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- **Production-Grade Idempotency Architecture:** Section 6 (lines 156-216) provides one of the most complete technical treatments of idempotency in agent skill libraries:
  - Demonstrates that key acceptance is meaningless without atomic database unique constraints to eliminate TOCTOU race conditions.
  - Mandates payload hashing (`requestHash`) to fail loudly on key reuse with mutated payloads.
  - Explicitly prescribes handling in-flight duplicates via 409 Conflict, bounded wait, or 202 Accepted.
  - Recognizes three distributed outcomes (success, failure, unknown) and requires logging intent before outbound calls.
  - Mandates key retention TTL outliving dead-letter queue (DLQ) replay chains.
- **Untrusted Third-Party Boundary Principle:** Third-party APIs are treated as untrusted boundaries (lines 115-118), explicitly calling out protection against malicious or instruction-like text injected into LLM contexts.
- **TypeScript Idioms:** Strong typing patterns for agent-generated code, including branded types (`__brand`) for domain entity IDs and discriminated unions for state variants.

## Context cost
14,884 bytes (SKILL.md itself, ~3,721 tokens). Direct reference `deprecation-and-migration` adds 12,516 bytes, for a total reachable context of 27,400 bytes (~6,850 tokens).
```

---

## 5. Verification Method

To independently verify these findings:
1. **File Integrity and Character Counts:**
   ```bash
   wc -c sources/addy/skills/incremental-implementation/SKILL.md sources/addy/skills/api-and-interface-design/SKILL.md
   # Should output:
   #    9507 sources/addy/skills/incremental-implementation/SKILL.md
   #   14884 sources/addy/skills/api-and-interface-design/SKILL.md
   ```
2. **Line and Reference Verification:**
   Inspect `sources/addy/skills/incremental-implementation/SKILL.md` line 10 for purpose statement; line 201 for test-driven-development reference; line 249 for definition-of-done reference.
   Inspect `sources/addy/skills/api-and-interface-design/SKILL.md` line 10 for purpose statement; line 22 for Hyrum's Law; line 156 for idempotency key.
3. **Existence of Invoked Paths:**
   ```bash
   ls -la sources/addy/references/definition-of-done.md \
          sources/addy/skills/git-workflow-and-versioning/SKILL.md \
          sources/addy/skills/test-driven-development/SKILL.md \
          sources/addy/skills/deprecation-and-migration/SKILL.md
   ```
   All paths exit with 0 and show valid file metadata.
4. **Invalidation Conditions:**
   - Any modification to `sources/addy` HEAD commit `d2c37ef6225dd8726cdd369a8030307f48592d26`.
   - Any alteration to `docs/plan/templates/inventory-entry.md`.
