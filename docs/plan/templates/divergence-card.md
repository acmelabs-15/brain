# Divergence card

One per VARIANT pair in `docs/analysis/manifest/<pkg>-duplicates.md`. Written to `docs/analysis/inventory/<pkg>/_divergence/<slug-a>--<slug-b>.md`. The pair's longer member gets a normal inventory entry; the shorter member's manifest row is satisfied by that entry plus this card. Fields marked **verbatim** carry the source's exact bytes (METHOD.md R3). `coverage.ts` checks that the number of `### Hunk` sections equals the hunk count in the ledger diff for this pair — an omitted hunk fails Phase 1V (R11).

```markdown
---
package: addy | matt | rjm
ledger_id: V<n>                       # from <pkg>-duplicates.md
canonical: <path of the member with the inventory entry>
variant: <path of the other member>
shared_ratio: <0.00–1.00, from the ledger>
hunks: <n, must equal the ledger diff's hunk count>
declared_provenance: none | "<verbatim declaration>" — path:line    # e.g. sourceDir/outputDir config, "GENERATED - Do not edit", symlink
unit: <unit-id>
---

# <canonical> ↔ <variant>

## Why two copies exist — required
One paragraph in your words: build output, harness port, hand copy, symlink, unknown. Cite the declaration if there is one; write `undeclared` if the repository says nothing.

## Hunks — required, verbatim, complete
One section per hunk in the ledger diff, in diff order. Do not merge, summarise, or skip hunks.

### Hunk 1 — <canonical>:<line range> ↔ <variant>:<line range>
- **class:** harness-substitution | content | generated-from
- **canonical says:** "<verbatim>" — path:line
- **variant says:** "<verbatim>" — path:line
- **meaning:** one sentence. For `harness-substitution`: which harness vocabulary maps to which (`Task(subagent_type=…)` ↔ `agent_type: "…"`). For `content`: what behaviour differs. For `generated-from`: what the generator changed and why, citing the generator if in scope.

### Hunk 2 — …

## Consequences — required
- **Phase 3 concordance rows raised:** list each `content` hunk as a candidate row, or `none`.
- **Phase 5 parity notes:** list each `harness-substitution` mapping as a candidate entry for the Claude Code ↔ Antigravity parity table (D-009), or `none`.
- **Defects:** `doc-drift` if the declared source and output disagree in a way the generator cannot explain; otherwise `none`.
```
