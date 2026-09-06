---
package: rjm
path: .claude/skills/cynefin-classifier/SKILL.md
type: skill
bytes: 14253
unit: inv-rjm-113
in_scope_via: .claude/commands/spec.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cynefin-classifier/SKILL.md

## Purpose — required, verbatim
> "Classify problems into the correct Cynefin domain and recommend the appropriate response strategy. This prevents applying the wrong cognitive approach to problems." — .claude/skills/cynefin-classifier/SKILL.md:12

## Design intent — required
Core sense-making and problem classification skill within the repository lifecycle, operationalizing Dave Snowden's Cynefin Framework for AI agents and software engineers. Evaluates cause-and-effect predictability across five domains (Clear, Complicated, Complex, Chaotic, Confusion) to match problems to their valid cognitive response strategies (Sense-Categorize-Respond, Sense-Analyze-Respond, Probe-Sense-Respond, Act-Sense-Respond, Gather Information). Prevents severe development failures such as analysis paralysis in complex spaces or bureaucratic delay during chaotic outages. Provides an automated classifier script (`classify.py`), domain transition guides, integration points with downstream agents/skills (`decision-critic`, `milestone-planner`, `architect`, `analyst`), five end-to-end software examples, and escalation criteria. Crucially, upstream specification workflows (`spec-generator` and `/spec`) invoke this skill to assign a problem-domain dimension orthogonal to engineering tiers, enforcing a mandatory halt gate if a problem domain is Chaotic.

## Phase — required
rjm:spec

## Inputs — required
- Problem description string or user statement (.claude/skills/cynefin-classifier/SKILL.md:260)
- Context string describing constraints, environment, or system state (.claude/skills/cynefin-classifier/SKILL.md:261)
- User queries / triggers: `classify this problem`, `cynefin analysis`, `what approach should we take`, `should we analyze or experiment`, `is this complex or complicated` (.claude/skills/cynefin-classifier/SKILL.md:18-22)

## Outputs — required
- Markdown classification report or JSON output conforming to template at lines 119-151, detailing Domain, Confidence, Rationale, Response Strategy, Recommended Actions, Pitfall Warning, and Related Considerations (Temporal, Boundary, Compound) (.claude/skills/cynefin-classifier/SKILL.md:120-151)
- Validation exit code via `scripts/classify.py` (0, 1, or 2) (.claude/skills/cynefin-classifier/SKILL.md:264-269, 377-380)

## Invokes — required
- script classify.py — .claude/skills/cynefin-classifier/SKILL.md:259
- reference cynefin-deep-dive.md — .claude/skills/cynefin-classifier/SKILL.md:365
- reference domain-transitions.md — .claude/skills/cynefin-classifier/SKILL.md:366
- reference software-applications.md — .claude/skills/cynefin-classifier/SKILL.md:367
- skill decision-critic — .claude/skills/cynefin-classifier/SKILL.md:33

## Invoked by — required
- skill spec-generator — .claude/skills/spec-generator/references/spec-prior-art-schema.md:164
- skill buy-vs-build-framework — .claude/skills/buy-vs-build-framework/SKILL.md:35
- skill requirements-interview — .claude/skills/requirements-interview/SKILL.md:113
- doc skill-reference.md — docs/skill-reference.md:168

## Concepts named — required, verbatim
- `cynefin-classifier` — .claude/skills/cynefin-classifier/SKILL.md:2 — defined here
- `Cynefin` — .claude/skills/cynefin-classifier/SKILL.md:4 — used here
- `Cynefin Framework` — .claude/skills/cynefin-classifier/SKILL.md:4 — defined here
- `Clear` — .claude/skills/cynefin-classifier/SKILL.md:4 — defined here
- `Complicated` — .claude/skills/cynefin-classifier/SKILL.md:4 — defined here
- `Complex` — .claude/skills/cynefin-classifier/SKILL.md:4 — defined here
- `Chaotic` — .claude/skills/cynefin-classifier/SKILL.md:4 — defined here
- `Confusion` — .claude/skills/cynefin-classifier/SKILL.md:4 — defined here
- `PROBE-SENSE-RESPOND` — .claude/skills/cynefin-classifier/SKILL.md:48 — defined here
- `SENSE-ANALYZE-RESPOND` — .claude/skills/cynefin-classifier/SKILL.md:48 — defined here
- `ACT-SENSE-RESPOND` — .claude/skills/cynefin-classifier/SKILL.md:58 — defined here
- `Sense-Categorize-Respond` — .claude/skills/cynefin-classifier/SKILL.md:134 — defined here
- `Gather Information` — .claude/skills/cynefin-classifier/SKILL.md:65 — defined here
- `safe-to-fail experiments` — .claude/skills/cynefin-classifier/SKILL.md:49 — used here
- `emergent practice` — .claude/skills/cynefin-classifier/SKILL.md:50 — used here
- `good practice` — .claude/skills/cynefin-classifier/SKILL.md:51 — used here
- `best practice` — .claude/skills/cynefin-classifier/SKILL.md:59 — used here
- `novel practice` — .claude/skills/cynefin-classifier/SKILL.md:60 — used here
- `Temporal State` — .claude/skills/cynefin-classifier/SKILL.md:82 — defined here
- `Compound Problems` — .claude/skills/cynefin-classifier/SKILL.md:240 — defined here
- `Escalation Criteria` — .claude/skills/cynefin-classifier/SKILL.md:270 — defined here
- `Anti-Patterns` — .claude/skills/cynefin-classifier/SKILL.md:387 — defined here

## Structure
- `## Triggers` — .claude/skills/cynefin-classifier/SKILL.md:14
- `## When to Use` — .claude/skills/cynefin-classifier/SKILL.md:24
- `## The Cynefin Framework` — .claude/skills/cynefin-classifier/SKILL.md:38
- `## Process` — .claude/skills/cynefin-classifier/SKILL.md:68
- `### Step 1: Identify Cause-Effect Relationship` — .claude/skills/cynefin-classifier/SKILL.md:70
- `### Step 2: Check Temporal State` — .claude/skills/cynefin-classifier/SKILL.md:82
- `### Step 3: Validate with Diagnostic Questions` — .claude/skills/cynefin-classifier/SKILL.md:91
- `## Output Format` — .claude/skills/cynefin-classifier/SKILL.md:117
- `## Domain-Specific Guidance` — .claude/skills/cynefin-classifier/SKILL.md:153
- `### Clear Domain` — .claude/skills/cynefin-classifier/SKILL.md:155
- `### Complicated Domain` — .claude/skills/cynefin-classifier/SKILL.md:170
- `### Complex Domain` — .claude/skills/cynefin-classifier/SKILL.md:185
- `### Chaotic Domain` — .claude/skills/cynefin-classifier/SKILL.md:201
- `### Confusion Domain` — .claude/skills/cynefin-classifier/SKILL.md:216
- `## Integration with Other Skills` — .claude/skills/cynefin-classifier/SKILL.md:231
- `## Compound Problems` — .claude/skills/cynefin-classifier/SKILL.md:240
- `## Scripts` — .claude/skills/cynefin-classifier/SKILL.md:252
- `### classify.py` — .claude/skills/cynefin-classifier/SKILL.md:254
- `## Escalation Criteria` — .claude/skills/cynefin-classifier/SKILL.md:270
- `## Examples` — .claude/skills/cynefin-classifier/SKILL.md:280
- `### Example 1: CI Test Failures` — .claude/skills/cynefin-classifier/SKILL.md:282
- `### Example 2: Production Database Down` — .claude/skills/cynefin-classifier/SKILL.md:298
- `### Example 3: Framework Choice` — .claude/skills/cynefin-classifier/SKILL.md:314
- `### Example 4: Memory Leak` — .claude/skills/cynefin-classifier/SKILL.md:330
- `### Example 5: Vague Bug Report` — .claude/skills/cynefin-classifier/SKILL.md:346
- `## References` — .claude/skills/cynefin-classifier/SKILL.md:363
- `## Verification` — .claude/skills/cynefin-classifier/SKILL.md:369
- `## Anti-Patterns` — .claude/skills/cynefin-classifier/SKILL.md:387

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/cynefin-classifier/scripts/classify.py`, language: Python 3, lines: 463
- documented invocation:
  - "python3 .claude/skills/cynefin-classifier/scripts/classify.py" — .claude/skills/cynefin-classifier/SKILL.md:259
  - "python3 .claude/skills/cynefin-classifier/scripts/classify.py" — .claude/skills/cynefin-classifier/SKILL.md:374
- **executed:** yes
- actual command run: `python3 .claude/skills/cynefin-classifier/scripts/classify.py --problem "Description of the problem" --context "Additional context about constraints, environment"`
  abridged stdout:
  ```markdown
  ## Cynefin Classification

  **Problem**: Description of the problem

  ### Domain: CONFUSION

  **Confidence**: LOW

  ### Rationale

  No clear indicators for any specific domain. Insufficient information to classify confidently.

  ### Response Strategy

  **Approach**: Gather Information

  ### Recommended Actions

  1. List specific unknowns that block classification
  2. Gather minimum viable information
  3. Decompose into smaller sub-problems if possible
  4. Re-classify once information is available

  ### Pitfall Warning

  Assuming a domain without evidence. Acting before gathering sufficient information.

  ### Related Considerations

  - **Temporal**: Temporary state. Should resolve to another domain once information is gathered.
  ```
  **actual exit code**: 2
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:
  - "0: Classification complete" — .claude/skills/cynefin-classifier/SKILL.md:266
  - "1: Invalid arguments" — .claude/skills/cynefin-classifier/SKILL.md:267
  - "2: Insufficient information (Confusion domain)" — .claude/skills/cynefin-classifier/SKILL.md:268
  Actual exit paths in script code:
  - `return 1` (.claude/skills/cynefin-classifier/scripts/classify.py:445) on empty problem input
  - `return 2` (.claude/skills/cynefin-classifier/scripts/classify.py:456) when domain is Confusion
  - `return 0` (.claude/skills/cynefin-classifier/scripts/classify.py:458) on successful classification into action domains
- for validators/gates: can it exit non-zero? Yes, exits 1 on invalid argument, 2 on Confusion classification. Does it fail on the source repo's own default branch? Exits 0 on Clear/Complicated/Complex inputs, 2 on generic input, 1 on empty input.
- does the output match what the documentation claims? Yes, Markdown formatting and JSON structure match the documented schema in `SKILL.md:120-151`.

## Defects — required
- `doc-drift` · .claude/skills/cynefin-classifier/SKILL.md:235-238 · Section "Integration with Other Skills" lists `milestone-planner`, `architect`, and `analyst` under the Skill column header, but these components are implemented as agents under `.claude/agents/` rather than skills under `.claude/skills/`.
- `doc-drift` · .claude/skills/cynefin-classifier/SKILL.md:240-250 · Section "Compound Problems" specifies a multi-step decomposition and sequencing process, but the bundled script `scripts/classify.py` hardcodes `compound_note=None` at line 309, noting that compound analysis is not yet automated.

## Observations
- Critical role in lifecycle governance: directly cited by `.claude/skills/spec-generator/references/spec-prior-art-schema.md:164, 180` as an orthogonal problem-domain classification combined with engineering complexity tiers (Tier 1-5).
- Serves as a hard gate for requirements specification: when `cynefin-classifier` returns Chaotic, `spec-prior-art-schema.md:180` mandates an immediate halt to specification work, instructing teams to stabilize the system before generating a PRD.
- Comprehensive guidance contains 5 worked real-world scenarios across the lifecycle, an anti-patterns matrix, escalation thresholds, and temporal transition rules.

## Context cost
43838 bytes total (~10960 tokens). Comprises `SKILL.md` (14253 bytes), `scripts/classify.py` (13632 bytes), `references/cynefin-deep-dive.md` (4824 bytes), `references/domain-transitions.md` (4702 bytes), and `references/software-applications.md` (6427 bytes).
