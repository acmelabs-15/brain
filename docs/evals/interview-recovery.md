# Interview recovery evaluation

This evaluation runs real Claude sessions with a scripted user. It checks question-tool events and files saved between answers. It does not check native dialog rendering.

## Run

Use Bun and an authenticated Claude CLI. The initial driver contract is checked against Claude Code 2.1.318. It uses the CLI's stream-json control transport and the [official question-answer shape](https://code.claude.com/docs/en/agent-sdk/user-input#return-answers-to-claude): the original questions plus an answers map keyed by question text.

Prepare two complete plugin folders. Keep the original skill snapshot intact. If the old version has broken metadata, make a separate baseline copy with only the metadata repaired and the deleted DEC command restored. Record those repairs beside the result. Both arms need their own plugin files; never edit either arm during a run.

Write an options file outside the repo:

```json
{
  "baseline": "/absolute/path/to/baseline-plugin",
  "candidate": "/absolute/path/to/candidate-plugin",
  "output": "/absolute/path/to/evaluation-results/iteration-1",
  "cases": ["answers-and-delegation"],
  "timeoutSeconds": 480,
  "maxCostUsd": 2
}
```

Run the first pair:

```sh
bun scripts/evals/interview-evaluation.ts /absolute/path/to/options.json
```

Inspect its events before running the other cases. Omit `cases` to run all seven. Each old/new pair starts together; pairs run sequentially. The partial-answer case starts a second, fresh process against the saved files, with no earlier conversation. The cost stopping threshold and time deadline apply to each process, so that case has two thresholds per arm. The CLI checks accrued cost; an in-flight response can exceed its threshold. It is not an absolute billing cap.

The cases cover:

- Delegation, two answers, records saved before the next question, and an unanswered final question.
- A partial answer carried into a fresh session.
- A superseded blocker and a late result from its old research.
- An interrupted do row whose side effect already succeeded.
- Clear approval of the final intent.
- Conditional approval that introduces an unknown import capability.
- A conversation-only map with a source that is unavailable.

## Evidence and grading

Each session writes its real CLI events to `trace.jsonl`, host replies to `host.jsonl`, and a file snapshot before each question. The host sends an answer only when one question matches the scripted subject. It interrupts at the first question without a scripted answer. An unexpected question, error, or timeout is recorded as such; it is not an interview success.

The model can write only Markdown records directly in the fixture's ideas, decisions and research folders, plus its root glossary. Fixture scripts, configuration and completion receipts stay read-only. The host rejects traversal and symlinks in record write paths. The fixed brain CLI creates numbered records through its bounded command allowlist.

Every arm has `outputs/transcript.md`, `outputs/files.json`, and `timing.json`. Costs remain null when the CLI does not report them. A harness interruption is not a user refusal or approval. The final unanswered question provides a state boundary, not proof of indefinite waiting.

Grade the expectations against both the events and the saved files. Check the specific files that existed before the next question, not only the final snapshot. Apply the official skill-creator grading schema and generate its review viewer after both arms complete. Record native UI rendering, long waits, and actual parallel worker timing as unverified.

The existing native plugin-eval cases remain useful for single-turn checks. They cannot establish this reply loop because they do not provide a simulated user. The new driver supplies scripted replies through the real question-tool channel instead.

## Keystone suite

The same driver supports eight paired setup, routing and question cases. Prepare immutable source snapshots and invented consumers without starting a model:

```sh
bun scripts/evals/prepare-keystone.ts <baseline-repo> <candidate-repo> <new-output-folder>
```

The prepared evals.json lists every expectation. The first-pair and remaining options both start with approved:false. After scoped approval, set that flag for the approved batch and run the existing interview-evaluation.ts entry point. First inspect the first pair's real hook, tool-reply and next-event evidence. Each arm uses a $1.50 CLI stopping threshold and 480-second deadline. Eight pairs reserve $24 against a $32 planning limit shared with retries. Known overruns increase the ledger and stop later pairs; unreported cost also stops the batch for inspection. The CLI compares accrued estimated cost after events, so neither a threshold nor the ledger guarantees an absolute billing maximum. Pairs run concurrently, one pair at a time. A repeated output folder is refused.

The snapshot includes the full public catalog: all 33 Brain skills, their support, actual commands, agents, output styles and the unmodified Claude manifest/hook. Runtime-linked public install and maintainer guides are included. Real project records, root maintainer AGENTS/CLAUDE, credentials, repository metadata, and source tests/fixtures are excluded. A manifest records exact files and hashes. Candidate source drift refuses execution; rebuild and review changed sources before a run. Omitting root maintainer instructions limits the comparison to consumer plugin behavior.

The host uses restricted/manual mode, empty setting sources, strict empty MCP, explicit tools and a selected Skill allowlist. It records real hook lifecycle events with --include-hook-events. The no-native-question case omits AskUserQuestion from the tool profile. Ordinary cases permit record writes only; setup permits the three fixed docs/agents files and bounded setup commands.

Every setup writer command, including dry-run/check, must pass the fixture's explicit --codex-home or --no-codex. The invented Codex home lives inside the consumer. Git initialization uses no external template or global/system configuration. Git environment overrides are removed from model subprocesses; claims stay in the fixture's .git or its dedicated XDG cache. No credential is copied.

Ambient CLAUDE/AGENTS memory is disabled with the documented CLAUDE_CODE_DISABLE_CLAUDE_MDS setting, auto memory is disabled, and all instruction-file paths are excluded. Source inspection in Claude 2.1.318 also confirms user skill/plugin discovery respects disabled setting sources. This is documented/static evidence, not proof from a completed live run. Managed enforcement remains active. Before a run, use keystone-preflight.ts to report documented local source presence, safe top-level keys, hook counts and authentication class only. It prints no policy values, hook commands, credentials or account identifiers. Resolve any present customization or unreadable source; retain the metadata evidence with the run. Native behavior still needs the first pair's real event trace.

Native dialog rendering remains unverified. A real question reply followed by the next stream event proves the tool exchange only. Grade transcripts, file snapshots and hook events through the official skill-creator schema, then use its review viewer.
