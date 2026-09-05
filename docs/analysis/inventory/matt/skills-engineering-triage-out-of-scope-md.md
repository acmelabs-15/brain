---
package: matt
path: skills/engineering/triage/OUT-OF-SCOPE.md
type: skill
bytes: 4667
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/triage/OUT-OF-SCOPE.md, sha256: 1fbf9b432130c6380aa65813b55553cfda150309b27c595e183f8e335b8a190d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/triage/OUT-OF-SCOPE.md

## Purpose — required, verbatim
> "The `.out-of-scope/` directory in a repo stores persistent records of rejected feature requests." — skills/engineering/triage/OUT-OF-SCOPE.md:3

## Design intent — required
Defines the structure, lifecycle, and operational semantics of the `.out-of-scope/` knowledge base in a repository. Solves two organizational problems: preserving institutional memory regarding why feature requests were declined so reasoning survives issue closure, and enabling deduplication during triage to prevent re-litigating rejected concepts. Specifies that files are organized per concept rather than per issue, mandates concept-similarity matching over keyword matching, and strictly limits recording to genuine enhancement rejections (excluding bug reports and already-implemented features).

## Phase — required
matt:Upkeep

## Inputs — required
Rejected enhancement feature requests and PRs, existing markdown records under `.out-of-scope/`.

## Outputs — required
Created or updated persistent concept documentation files at `.out-of-scope/<concept>.md` containing rationale and links to prior requests.

## Invokes — required
none

## Invoked by — required
- skill triage — skills/engineering/triage/SKILL.md:22
- skill triage — skills/engineering/triage/SKILL.md:85

## Concepts named — required, verbatim
- `Out-of-Scope Knowledge Base` — skills/engineering/triage/OUT-OF-SCOPE.md:1 — defined here
- `.out-of-scope/` — skills/engineering/triage/OUT-OF-SCOPE.md:3 — defined here
- `Institutional memory` — skills/engineering/triage/OUT-OF-SCOPE.md:5 — defined here
- `Deduplication` — skills/engineering/triage/OUT-OF-SCOPE.md:6 — defined here
- `concept` — skills/engineering/triage/OUT-OF-SCOPE.md:17 — defined here
- `concept similarity` — skills/engineering/triage/OUT-OF-SCOPE.md:75 — defined here
- `wontfix` — skills/engineering/triage/OUT-OF-SCOPE.md:86 — used here

## Structure
- `# Out-of-Scope Knowledge Base` — skills/engineering/triage/OUT-OF-SCOPE.md:1
- `## Directory structure` — skills/engineering/triage/OUT-OF-SCOPE.md:8
- `## File format` — skills/engineering/triage/OUT-OF-SCOPE.md:19
- `### Naming the file` — skills/engineering/triage/OUT-OF-SCOPE.md:56
- `### Writing the reason` — skills/engineering/triage/OUT-OF-SCOPE.md:60
- "## When to check `.out-of-scope/`" — skills/engineering/triage/OUT-OF-SCOPE.md:70
- "## When to write to `.out-of-scope/`" — skills/engineering/triage/OUT-OF-SCOPE.md:84
- `## Updating or removing out-of-scope files` — skills/engineering/triage/OUT-OF-SCOPE.md:99

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicit warning: do not write to `.out-of-scope/` when closing an issue as wontfix because the feature is already implemented (line 88), which would create false positive rejections.
- Mandates semantic concept matching ("night theme" matches `dark-mode.md`, line 75) rather than raw keyword matching.

## Context cost
4667 bytes (~1167 tokens). Standalone architectural guideline.
