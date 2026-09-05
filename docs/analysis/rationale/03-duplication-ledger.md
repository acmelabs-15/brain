# 03 · Duplication across the source packages — the general rule

**Status:** adopted as D-012 (METHOD §2.4, R11) on 2026-09-04; `dedupe.ts` shipped; `coverage.ts` enforces the alias and hunk-count rules. The coverage defect in §1.4 (rjm `Task(subagent_type)` resolving to skills, not agents) became D-013 and is fixed in `manifest.ts`.

**Why it exists.** Peter asked for a solution to duplicated files that is not specific to rjm: "I don't want the solution to be something that's super specific to just that… general solution… in all three of these code bases", and one that "never skimps on evaluating divergences". The rule below keys on bytes and file names only, so it needed no per-package configuration to find matt's symlink, addy's `.gemini/` mirror and rjm's build tree — and it reads every difference in full because the divergence card must reproduce every hunk of a `diff -u` the model did not produce.

**What changed after adoption.** Nothing in the rule. The reset (D-016) re-runs the ledgers in Phase 0; the ledger is regenerated at every phase gate (§10).

---

*The research as delivered on 2026-09-04 follows, unedited except for this preface. Section numbers inside it refer to the research bundle, not to METHOD.*

Every number below was produced by running `dedupe.ts` (in this folder) against the three pinned clones and the three manifests currently on the `v2` branch (HEAD `2e5f6aa`). Commands and output are in `samples/`.

## 1.1 What is actually duplicated — all three packages

Duplication is not an rjm quirk. All three packages carry the same pattern at different scales: a canonical tree plus one or more **harness mirrors**, produced either by a build step, a symlink, or a hand copy.

| Package (pinned SHA) | Mirror pattern | Exact copies | Near copies (≥60% shared lines) | Where the divergence comes from |
|---|---|---|---|---|
| `matt` @ `6654f6b` | `AGENTS.md` → `CLAUDE.md` symlink | 1 | 0 | none — a symlink |
| `addy` @ `d2c37ef` | `commands/*.toml` ↔ `.gemini/commands/*.toml` | 5 | 4 (83–95% shared) | harness substitution: "the CLI" → "Gemini CLI", `CLAUDE.md` → `GEMINI.md`, `$CRUX_API_KEY` phrasing, one behavioural change (`webperf`: "Spawn the subagent" vs "Act as the persona") |
| `rjm` @ `2abef31` | `.claude/{skills,agents,commands,lib,hooks}` → `src/copilot-cli/**`, `src/vs-code-agents/**`, `.github/agents/**`, `src/claude/**`; `templates/agents/*.shared.md` → agent files | 1,155 files, 21.8 MB (18.4% of the repo) | 174 pairs repo-wide; 6 `SKILL.md` pairs in the lifecycle trees | declared build output (`templates/platforms/copilot-cli.yaml:4-12` names `.claude/skills` as `sourceDir` and `src/copilot-cli/skills` as `outputDir`; `CONTRIBUTING.md:144,148` "GENERATED - Do not edit directly"); `.claude/skills` vs `src/copilot-cli/skills`: 604 same-path byte-identical, 6 same-path divergent (2–14 changed lines each, all `Task(subagent_type="x")` → `agent_type: "project-toolkit:x"` and `$ARGUMENTS` → prose) |

Inside the manifests the agent has already produced, exact duplication is small because the rjm manifest is reachability-derived (METHOD §2) and simply never reaches `src/copilot-cli`: addy 5 redundant files (0.8% of bytes), matt 1, rjm 9 in 3 groups (0.2%). So the token saving from exact dedupe alone is modest. The value of the rule is elsewhere — see 1.3 — and the analysis surfaced a real coverage defect (1.4).

## 1.2 Three species of duplicate, and what each one means for inventory

The same three species appear in every package, so the rule is written per species, not per package.

**EXACT** — byte-identical content at two or more paths (hash equal). The second copy carries no information except *that a mirror exists at that path*. Read once; record the alias.

**VARIANT** — same file name under different roots, content differs, most lines shared. This is where the harness-porting knowledge lives: how Addy renders a Claude command for Gemini CLI, how rjm rewrites `Task(...)` for Copilot CLI. For brain's D-009 (Claude-first canonical with full Antigravity parity) those deltas are some of the most relevant evidence in the corpus. They must be read in full — but only the *delta* is new; the shared body was already inventoried once.

**GENERATED-FROM** — the repository itself declares one tree as the source and another as build output (rjm: `templates/platforms/*.yaml`, `CONTRIBUTING.md`; addy: none declared, the `.gemini/` copies are hand-maintained; matt: symlink). The declaration is evidence of the author's *intent* about what is canonical, and it is quoted like any other claim (`path:line`). It does not by itself remove anything from the manifest: rjm's declared "source" for agents is `templates/agents/*.shared.md`, yet what Claude Code actually loads is `.claude/agents/*.md`, and those differ by 23–380 body lines per agent (`architect`: 380). Provenance metadata is a claim to record, not a filter to trust.

## 1.3 The rule (proposed METHOD §2.4 + R11) — written so the agent cannot skimp

Rule one and rule two in METHOD §2 already say *what* is in scope. This adds *how duplicated scope is consumed*.

> **§2.4 Duplication ledger.** Phase 0 step 6 also runs `bun scripts/synthesis/dedupe.ts <pkg> sources/<pkg> docs/analysis/manifest/<pkg>.md > docs/analysis/manifest/<pkg>-duplicates.md` for every package. The ledger has two sections. **EXACT** groups list one canonical path and its aliases; **VARIANT** pairs list two paths, the shared-line ratio, and the complete unified diff. The ledger is regenerated, never hand-edited, and is re-run at every phase gate as an anti-drift check (§10).
>
> The manifest is unchanged by the ledger: every path stays a row. The ledger changes how rows are *satisfied*:
>
> (a) An EXACT alias row is satisfied by the canonical row's inventory card. The card's header lists every alias; every quotation cites the canonical `path:line` followed by `(= <alias path>)`. No separate card is written for an alias, and no alias is read a second time.
>
> (b) A VARIANT pair is satisfied by one inventory card for the longer member plus a **divergence card** (`templates/divergence-card.md`) for the pair. The divergence card quotes every hunk of the diff verbatim — nothing elided — and classifies each hunk as `harness-substitution` (same meaning, different harness vocabulary), `content` (different meaning), or `generated-from` (declared build output, with the declaration cited). A divergence card with a `content` hunk feeds Phase 3 concordance as its own row; `harness-substitution` hunks feed the Phase 5 parity section.
>
> (c) A GENERATED-FROM declaration found in the source (`sourceDir`/`outputDir` config, "do not edit" notices, symlinks) is recorded on the card of the declared source with a `path:line` citation. It never removes a row from the manifest and never substitutes for reading the output when the output differs (rule (b) applies).
>
> **R11 (dedupe fidelity).** A card that cites an alias without the canonical path, or a divergence card that omits a hunk present in the ledger diff, fails Phase 1V. `coverage.ts` verifies (i) every EXACT alias row is referenced by exactly one card, (ii) every VARIANT pair has a divergence card whose hunk count equals the ledger's hunk count.

Why this cannot be skimped: the ledger's diff is produced by `diff -u`, not by the model, and the divergence card must reproduce every hunk in it. The verifier compares hunk counts mechanically. The agent saves the shared body and cannot save the delta.

Why it is general: the ledger keys on content hash and on file name, not on any package's directory layout. It found matt's symlink, addy's Gemini folder and rjm's build tree with no per-package configuration. Threshold is `DEDUPE_THRESHOLD` (default 0.6); the sample runs show a clean gap between real variants (72–99%) and noise.

## 1.4 A coverage defect this surfaced — needs a §11 change-propagation run

`scripts/synthesis/manifest.ts:222` resolves `Task(subagent_type="x")` to `.claude/skills/x`. In rjm those names are agents, not skills:

```
$ grep -rhoE 'Task\(subagent_type="[a-z-]+"' .claude/commands .claude/skills/review | sed -E 's/.*="([a-z-]+)"/\1/' | sort -u
analyst architect critic devops general-purpose implementer milestone-planner qa security spec-generator task-decomposer
$ for n in …; do test -f .claude/agents/$n.md && echo yes || echo NO; done
9 × yes (.claude/agents/<n>.md exists), spec-generator → .claude/skills/spec-generator (a skill), general-purpose → built-in
$ grep -c '^| \.claude/agents/' docs/analysis/manifest/rjm.md
0
$ grep -c '^| templates/agents/' docs/analysis/manifest/rjm.md
29
```

So none of the nine agent definitions the lifecycle commands dispatch to is in the rjm manifest, while 29 `templates/agents/*.shared.md` files entered via README links. The templates are not what Claude Code loads, and they differ from `.claude/agents/*.md` by 23 (`critic`) to 380 (`architect`) body lines. Fix: resolve `Task(subagent_type="x")` to `.claude/agents/x.md` *and* `.claude/skills/x` (whichever exists), regenerate, and let the ledger classify `templates/agents/*.shared.md` ↔ `.claude/agents/*.md` as VARIANT pairs so the deltas are inventoried as divergence cards rather than as 29 unrelated documents. The prompt in `PROMPT-next-session.md` asks for exactly this through §11.

Secondary hazard, already flagged earlier: `manifest.ts:263` also accepts a card named after the bare basename as satisfying a row, so two different files named `SKILL.md` or `README.md` can check each other off. Keep the slug-only match.

## 1.5 Files in this folder

`dedupe.ts` — the reference implementation (pure Bun, zero dependencies, ~60 lines of logic). The agent should adopt it as `scripts/synthesis/dedupe.ts`, run it, and commit the output; it must not be treated as already run. `samples/{addy,matt,rjm}-duplicates.md` — the ledgers produced here from the pinned clones at manifest scope, so you can see the shape before the agent produces its own. `templates/divergence-card.md` — the card schema referenced in (b).
