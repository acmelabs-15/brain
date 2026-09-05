---
package: rjm
path: .claude/skills/adr-generator/SKILL.md
type: skill
bytes: 12612
unit: inv-rjm-76
in_scope_via: .claude/commands/spec.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-generator/SKILL.md

## Purpose — required, verbatim
> "Create well-structured Architectural Decision Records that document technical decisions with clear context, rationale, consequences, and alternatives." — .claude/skills/adr-generator/SKILL.md:16

## Design intent — required
Autonomous, template-aware architecture decision record generator implementing a disciplined 5-phase generation workflow (G1: Gather, G2: Research, G3: Generate, G4: Validate, G5: Save). Solves the problem of ad-hoc, fragmented, or poorly evidenced architectural documentation across heterogeneous codebases by automatically inspecting destination directories, detecting in-use templates and naming patterns, preventing number collisions via deterministic tooling (`check_adr_uniqueness.py`), incorporating ASR tests and START readiness gates, enforcing Prior Art Investigations when altering existing architecture, generating lifecycle YAML frontmatter with strict security constraints (`explainer` URL display-only to prevent SSRF CWE-918; initial status forced to `proposed`), validating against a quality checklist, and handing off to multi-agent debate review (`adr-review`). Without it, technical decisions would be documented inconsistently, lack rigorous evaluation of alternatives and negative consequences, or risk duplicate numbering and premature unreviewed acceptance.

## Phase — required
rjm:spec

## Inputs — required
- User decision description, context, alternatives, stakeholder names (Phase G1).
- Destination repository ADR files and directory structures across `.agents/architecture/`, `docs/adr/`, `docs/architecture/`, `docs/decisions/`, `architecture/decisions/` (Phase G2).
- Prior art investigation data (from user or via `chestertons-fence` skill if modifying existing systems).

## Outputs — required
- An ADR markdown file saved to the destination directory (e.g. `.agents/architecture/ADR-NNN-slug.md` or `docs/decisions/NNNN-slug.md`).

## Invokes — required
- reference ad-quality-frameworks.md — .claude/skills/adr-generator/SKILL.md:72
- reference ad-quality-frameworks.md — .claude/skills/adr-generator/SKILL.md:74
- skill chestertons-fence — .claude/skills/adr-generator/SKILL.md:76
- reference adr-templates-catalog.md — .claude/skills/adr-generator/SKILL.md:98
- reference adr-templates-catalog.md — .claude/skills/adr-generator/SKILL.md:107
- script check_adr_uniqueness.py — .claude/skills/adr-generator/SKILL.md:122
- reference adr-template.md — .claude/skills/adr-generator/SKILL.md:145
- reference quality-checklist.md — .claude/skills/adr-generator/SKILL.md:176
- skill adr-review — .claude/skills/adr-generator/SKILL.md:190
- reference adr-template.md — .claude/skills/adr-generator/SKILL.md:247
- reference adr-templates-catalog.md — .claude/skills/adr-generator/SKILL.md:248
- reference ad-quality-frameworks.md — .claude/skills/adr-generator/SKILL.md:249
- reference adr-best-practices.md — .claude/skills/adr-generator/SKILL.md:250
- reference quality-checklist.md — .claude/skills/adr-generator/SKILL.md:251

## Invoked by — required
- command spec.md — .claude/commands/spec.md:176
- skill autoplan — .claude/skills/autoplan/SKILL.md:132
- skill adr-review — .claude/skills/adr-review/SKILL.md:4
- skill ai-agents-docs-of-record — .claude/skills/ai-agents-docs-of-record/SKILL.md:30

## Concepts named — required, verbatim
- `Phase G1: Gather` — .claude/skills/adr-generator/SKILL.md:60 — defined here
- `Phase G2: Research` — .claude/skills/adr-generator/SKILL.md:78 — defined here
- `Phase G3: Generate` — .claude/skills/adr-generator/SKILL.md:132 — defined here
- `Phase G4: Validate` — .claude/skills/adr-generator/SKILL.md:174 — defined here
- `Phase G5: Save` — .claude/skills/adr-generator/SKILL.md:178 — defined here
- `ASR Test` — .claude/skills/adr-generator/SKILL.md:72 — used here
- `START Definition of Ready` — .claude/skills/adr-generator/SKILL.md:74 — used here
- `Prior Art Investigation` — .claude/skills/adr-generator/SKILL.md:76 — used here
- `chestertons-fence` — .claude/skills/adr-generator/SKILL.md:76 — used here
- `Lifecycle frontmatter` — .claude/skills/adr-generator/SKILL.md:143 — defined here
- `check_adr_uniqueness.py` — .claude/skills/adr-generator/SKILL.md:122 — used here
- `adr-review` — .claude/skills/adr-generator/SKILL.md:190 — used here
- `Project Canonical` — .claude/skills/adr-generator/SKILL.md:108 — used here
- `MADR` — .claude/skills/adr-generator/SKILL.md:108 — used here
- `Nygard` — .claude/skills/adr-generator/SKILL.md:4 — used here
- `Alexandrian` — .claude/skills/adr-generator/SKILL.md:4 — used here
- `Free Lunch Coupon` — .claude/skills/adr-generator/SKILL.md:204 — used here
- `Sales Pitch` — .claude/skills/adr-generator/SKILL.md:206 — used here
- `Dummy alternatives` — .claude/skills/adr-generator/SKILL.md:207 — used here

## Structure
- `# ADR Generator` — .claude/skills/adr-generator/SKILL.md:14
- `## Triggers` — .claude/skills/adr-generator/SKILL.md:18
- `## Quick Start` — .claude/skills/adr-generator/SKILL.md:30
- `## When to Use` — .claude/skills/adr-generator/SKILL.md:46
- `## Process` — .claude/skills/adr-generator/SKILL.md:58
- `### Phase G1: Gather` — .claude/skills/adr-generator/SKILL.md:60
- `### Phase G2: Research` — .claude/skills/adr-generator/SKILL.md:78
- `#### Step 1: Locate ADR directory` — .claude/skills/adr-generator/SKILL.md:82
- `#### Step 2: Detect template from existing ADRs` — .claude/skills/adr-generator/SKILL.md:93
- `#### Step 3: Handle no existing ADRs` — .claude/skills/adr-generator/SKILL.md:103
- `#### Step 4: Determine next number` — .claude/skills/adr-generator/SKILL.md:111
- `### Phase G3: Generate` — .claude/skills/adr-generator/SKILL.md:132
- `### Phase G4: Validate` — .claude/skills/adr-generator/SKILL.md:174
- `### Phase G5: Save` — .claude/skills/adr-generator/SKILL.md:178
- `## Anti-Patterns` — .claude/skills/adr-generator/SKILL.md:194
- `## Style` — .claude/skills/adr-generator/SKILL.md:212
- `## Verification` — .claude/skills/adr-generator/SKILL.md:221
- `## Related Skills` — .claude/skills/adr-generator/SKILL.md:235
- `## References` — .claude/skills/adr-generator/SKILL.md:245

## Scripts — required if type is script or the skill ships scripts
The skill references an external validation script `scripts/validation/check_adr_uniqueness.py`:
- path: `scripts/validation/check_adr_uniqueness.py`, language: Python, lines: 172
- documented invocation: `python3 scripts/validation/check_adr_uniqueness.py --print-next` — .claude/skills/adr-generator/SKILL.md:122
- **executed:** yes
- actual command run: `python3 scripts/validation/check_adr_uniqueness.py --print-next`
- stdout: `105`
- actual exit code: 0
- documented exit codes vs actual exit paths:
  In code `scripts/validation/check_adr_uniqueness.py`:
  - `sys.exit(0)` on clean exit / `--print-next` (line 166)
  - `sys.exit(1)` on duplicate numbers found (line 155)
- does the output match what documentation claims: Yes, prints the next available sequential number (105).

## Defects — required
none

## Observations
- Hardens against SSRF (CWE-918): Lines 157, 168-170, and 188 strictly mandate that the frontmatter `explainer` URL must never be auto-fetched or resolved by agents.
- Enforces strict workflow governance: the generator always emits `status: proposed` on new records, requiring multi-agent debate review (`adr-review`) to transition to `accepted`.
- Invokes `chestertons-fence` for prior art investigations; per METHOD.md §1.2, `chestertons-fence` is outside the lifecycle synthesis boundary (`implementation_in_scope: false`), but the lifecycle concept of prior art investigation is preserved.

## Context cost
12612 bytes (~3150 tokens) for SKILL.md.
Full bundled skill context across all 5 references is 42953 bytes (~10738 tokens).
