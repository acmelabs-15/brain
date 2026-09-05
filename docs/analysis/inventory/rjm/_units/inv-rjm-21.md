---
unit: inv-rjm-21
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-21

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-058-agent-eval-discipline.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-058-agent-eval-discipline-md.md` (11033 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-059-pr-review-completion-gate-dispatcher-md.md` (6130 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-21.md`

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-058 defines the between-subjects agent-vs-baseline offline evaluation methodology, complementing ADR-057 (prompt-change regression validation) and deferring form-factor evaluation (agent vs skill loaded inline) to ADR-075. It is also linked from `.claude/skills/security-review/SKILL.md`.
- ADR-059 establishes the deterministic verifier dispatcher and `pass_when` DSL for the `/pr-review` completion gate, eliminating narrative self-attestation ("Reporting-Without-Acting Anti-Pattern"). It is linked from ADR-065 (orchestrator as router) and ADR-074 (security review quick pass mode).
- Defect note: ADR-059 references `pr-review-config.yaml` as repo-root relative, whereas the configuration is located at `.claude/commands/pr-review-config.yaml`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,700 tokens (44,070 bytes).
Approximate tokens of output written: ~4,200 tokens (17,163 bytes across 2 inventory cards, plus unit report).
