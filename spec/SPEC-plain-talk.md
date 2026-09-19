# Spec: plain-talk

Module `plain-talk` of `CAPABILITY-MAP.md`. Depends on `host-manifests`.
Status: approved 2026-09-19; amended the same day, see the amendment note.

## Objective

The agent talks plain on every turn, in all four hosts, from one source text.
Plain means: one line of context first, ASD-STE100 Simplified Technical English,
the project's own words from `CONTEXT.md`, a table for a choice and a list for a
sequence. The repair when a message still fails is the vendored `wait-what` skill.

Whether the text works is not assumed. The `evals` module measures it, and the
text is versioned so it can be tuned.

The text follows the install's scope. Where the host can carry it in the plugin, it
comes with the plugin, at the scope the plugin was installed in. Codex is the one host
that cannot, and its plugin install is per machine, so its text goes to the per-machine
file.

| Host | Every-turn channel | File brain ships | Who applies it |
|---|---|---|---|
| Claude Code | output style | `output-styles/talk-plain.md`, `force-for-plugin: true` | the host, while brain is enabled |
| Gemini CLI | extension context file | `GEMINI.md` at the root, named by `contextFileName` in `gemini-extension.json` | the host, with every prompt |
| Antigravity CLI | plugin rule | `rules/talk-plain.md`, `trigger: always_on` | the host, while brain is installed |
| Codex CLI | `$CODEX_HOME/AGENTS.md`, the user's global file | `plain-talk/AGENTS-block.md`, a block the `setup` skill writes | the user, once per machine, through `setup` |

brain's own `AGENTS.md` carries the same block, so a session on brain itself talks plain
in every host, with or without the plugin installed.

**Amended 2026-09-19, by the context-scope decision.** The Codex and Antigravity rows
changed from "`AGENTS.md` in the user's repo, once per repo" to the rows above, and the
rule and the brain `AGENTS.md` block became render targets. Evidence: Google's plugin
layout lists `rules/`, and a test from August 2026 shows a plugin rule with
`trigger: always_on` active in the CLI; Codex plugin config is user-level only
(openai/codex#18115), and the Codex docs put communication style in the global file.

Users: everyone who installs brain, on every turn. Peter first.

## The source text

`plain-talk/PLAIN-TALK.md` holds the rules once, with no host frontmatter. Its
first version is Peter's user-level output style `~/.claude/output-styles/talk-plain.md`
(read 2026-09-19), which has five parts: the shape of a reply, the sentence rules,
the structure rules, the before-you-send checks, and the rule that the same
sentence rules bind an `AskUserQuestion` call and that the `ask-user-question` skill
is loaded before one is composed.

Two edits on the way in:

- The vocabulary rule names `CONTEXT.md` and `CONTEXT-MAP.md` in the words of the
  vendored `domain-modeling` skill, so the two agree.
- The repair line names `wait-what` by its skill name, so the agent can invoke it.

The text is host-neutral: it never names a tool that exists in one host only.
The `AskUserQuestion` line becomes "the host's user-question tool", which the
`ask-user-question` skill maps per host.

## Rendering

`bun run plain-talk:render` writes four files from the source text and four small
templates, then puts the block into brain's own `AGENTS.md` between the markers, and
`-- --check` exits 1 if any written file differs from what it would write now. The
generated files are committed, so an install needs no build.

| Output | Template adds |
|---|---|
| `output-styles/talk-plain.md` | frontmatter: `name: talk-plain`, `description`, `keep-coding-instructions: true`, `force-for-plugin: true` |
| `GEMINI.md` | a one-line heading `# brain: talk plain`, then the body |
| `rules/talk-plain.md` | frontmatter `trigger: always_on`, the same heading, then the body |
| `plain-talk/AGENTS-block.md` | a `## Talk plain` heading and an HTML comment marking the block's start and end, so a file that holds other text can carry it |
| `AGENTS.md` (block target) | nothing; the block from `plain-talk/AGENTS-block.md` replaces what sits between the markers, and the rest of the file is kept |

The body is byte-identical in all four outputs. That is a test.

## Tech Stack

Bun 1.4.0, TypeScript, `bun:test`. No Node-only API.

## Commands

```
bun run plain-talk:render            # write the outputs
bun run plain-talk:render -- --check # exit 1 on drift
bun test
bun run typecheck
```

CI adds `plain-talk:render -- --check` after the version check.

## Project Structure

```
plain-talk/PLAIN-TALK.md                   the source text
plain-talk/AGENTS-block.md                 generated
plain-talk/templates/output-style.md       frontmatter template
plain-talk/templates/gemini.md             heading template
plain-talk/templates/antigravity-rule.md   rule frontmatter and heading template
plain-talk/templates/agents-block.md       heading and markers template
output-styles/talk-plain.md                generated
GEMINI.md                                  generated
rules/talk-plain.md                        generated
AGENTS.md                                  hand-written; the block at its end is generated
scripts/plain-talk/block.ts                the marker replace, shared with setup
scripts/plain-talk/render.ts
scripts/plain-talk/__tests__/block.test.ts
scripts/plain-talk/__tests__/render.test.ts
```

## Code Style

```ts
// scripts/plain-talk/render.ts
export type Target = { template: string; out: string };
export type BlockTarget = { block: string; into: string };

export const targets: readonly Target[] = [
  { template: "plain-talk/templates/output-style.md", out: "output-styles/talk-plain.md" },
  { template: "plain-talk/templates/gemini.md", out: "GEMINI.md" },
  { template: "plain-talk/templates/antigravity-rule.md", out: "rules/talk-plain.md" },
  { template: "plain-talk/templates/agents-block.md", out: "plain-talk/AGENTS-block.md" },
];

export const blockTargets: readonly BlockTarget[] = [
  { block: "plain-talk/AGENTS-block.md", into: "AGENTS.md" },
];

export function render(template: string, body: string): string {
  return template.replace("{{body}}", body.trimEnd()) + "\n";
}
```

Named exports, explicit types, kebab-case files, no em-dashes in prose.

## Testing Strategy

`bun:test` in `scripts/plain-talk/__tests__/`, against a fixture source and fixture
templates in a temp directory: every target written; the body identical in all;
the output-style frontmatter carries the four fields; `--check` passes after a render
and fails after a one-byte edit of an output or of the block inside the hand-written
file; text outside the markers is kept; the block comes from the fresh render, not from
the output file on disk; a template without `{{body}}` is an error.

Behaviour, whether the agent talks plain, is not tested here. The `evals` module owns it.

## Boundaries

- **Always:** edit `PLAIN-TALK.md`, never a generated file; commit generated files; keep the body host-neutral.
- **Ask first:** change a rule in the source text; add a host output; drop `force-for-plugin`.
- **Never:** put a host-specific tool name in the body; hand-edit an output or the block in `AGENTS.md`.

## Success Criteria

1. `plain-talk:render -- --check` exits 0 on a clean tree and 1 after an output is edited.
2. In a Claude Code session with brain enabled and no `outputStyle` set, `/output-style` reports `talk-plain` active. Manual, recorded with the CLI version and date.
3. In a Gemini CLI session with brain installed, `/memory show` includes the block. Manual, recorded.
4. After `setup` runs on a machine with Codex, `$CODEX_HOME/AGENTS.md` holds the block between the markers, and a second run changes nothing. Verified in the `setup` module.
5. The body of the four outputs is byte-identical, by test.
6. In an Antigravity CLI session with brain installed, the agent lists the plugin rule as active. Manual, recorded on the Antigravity install page.

## Open Questions

1. `force-for-plugin` overrides any output style a user chose, and the only opt-out is to disable brain. Peter chose the forced style on 2026-09-19. Say if an opt-out is wanted; it would be a documented setting, not a second mechanism.
2. Resolved 2026-09-19: Antigravity loads a plugin rule with `trigger: always_on`. brain ships `rules/talk-plain.md`; the install run records the check.
3. Resolved 2026-09-19: output styles never reach Claude Code sub-agents, so every brain-owned text that dispatches one, the build, ship and webperf commands in both hosts and the review skill, puts `plain-talk/AGENTS-block.md` at the top of the sub-agent prompt. A test under `scripts/lifecycle/__tests__/` holds the list. The build sub-agent also returns a decision it cannot settle as one question, because a sub-agent cannot ask the user.
