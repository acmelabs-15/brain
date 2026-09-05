---
unit: inv-matt-39
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-39

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/grill-with-docs/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/grill-with-docs/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/implement/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/implement/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/improve-codebase-architecture/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/improve-codebase-architecture/HTML-REPORT.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/improve-codebase-architecture/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/prototype/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/prototype/LOGIC.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/prototype/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/prototype/UI.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/README.md`

## Outputs produced
- `docs/analysis/inventory/matt/skills-engineering-grill-with-docs-agents-openai-yaml.md` (1800 bytes)
- `docs/analysis/inventory/matt/skills-engineering-grill-with-docs-skill-md.md` (2720 bytes)
- `docs/analysis/inventory/matt/skills-engineering-implement-agents-openai-yaml.md` (1820 bytes)
- `docs/analysis/inventory/matt/skills-engineering-implement-skill-md.md` (3034 bytes)
- `docs/analysis/inventory/matt/skills-engineering-improve-codebase-architecture-agents-openai-yaml.md` (1994 bytes)
- `docs/analysis/inventory/matt/skills-engineering-improve-codebase-architecture-html-report-md.md` (5746 bytes)
- `docs/analysis/inventory/matt/skills-engineering-improve-codebase-architecture-skill-md.md` (5048 bytes)
- `docs/analysis/inventory/matt/skills-engineering-prototype-agents-openai-yaml.md` (1570 bytes)
- `docs/analysis/inventory/matt/skills-engineering-prototype-logic-md.md` (3883 bytes)
- `docs/analysis/inventory/matt/skills-engineering-prototype-skill-md.md` (3271 bytes)
- `docs/analysis/inventory/matt/skills-engineering-prototype-ui-md.md` (4086 bytes)
- `docs/analysis/inventory/matt/skills-engineering-readme-md.md` (3183 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-39 inventories four engineering skills and the suite directory README in `sources/matt/skills/engineering/`:
  1. `grill-with-docs`:
     - Acts as the conversational head of the primary build chain for repos with existing codebases.
     - Thin orchestrator delegating questioning to `grilling` and documentation persistence to `domain-modeling`.
     - Explicitly user-invoked (`disable-model-invocation: true` in `SKILL.md` and `policy.allow_implicit_invocation: false` in `openai.yaml`).
  2. `implement`:
     - Acts as the construction engine for decided work (spec or tickets).
     - Mandates rigorous five-beat construction discipline: pre-agreed seams with `/tdd`, frequent typechecks, isolated single tests, full test suite pass, code review pass, and branch commit.
     - User-invoked (`disable-model-invocation: true` and `allow_implicit_invocation: false`).
  3. `improve-codebase-architecture`:
     - Maintenance and discovery skill targeting shallow modules and leaky abstractions.
     - Scopes exploration using Git churn history (`git log --oneline`) and the deletion test.
     - Accompanied by `HTML-REPORT.md`, which specifies an interactive visual review document rendered to the OS temp directory (`<tmpdir>/architecture-review-<timestamp>.html`) with CDN Tailwind/Mermaid and custom SVG/CSS visualizations (mass diagrams, cross-sections).
     - Feeds candidates into a grilling loop to update `CONTEXT.md` and record ADRs.
  4. `prototype`:
     - Model-invoked exploratory skill (lacks `disable-model-invocation: true` and policy restrictions).
     - Bifurcates based on question type: `LOGIC.md` produces a standalone zero-dependency HTML demo around a portable pure logic module with scenario walkthrough tabs; `UI.md` creates 3-5 structural variations on an existing route (sub-shape A) or new route (sub-shape B) with an interactive floating switcher.
     - Enforces preservation of prototypes as primary sources on disposable git branches (`prototype/<name>`) while incorporating validated decisions into main code.
  5. `README.md`:
     - Central navigational catalog establishing the two-tier taxonomy: 9 user-invoked orchestrators versus 9 model-invoked primitives.
- None of this unit's files appears in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,400 tokens (33,584 bytes across 12 files); approximate tokens of output written: ~9,500 tokens (38,155 bytes across 12 inventory cards).
