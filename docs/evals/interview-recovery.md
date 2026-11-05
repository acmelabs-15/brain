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

Inspect its events before running the other cases. Omit `cases` to run all six. Each old/new pair starts together; pairs run sequentially. The partial-answer case starts a second, fresh process against the saved files, with no earlier conversation. The cost and time bounds apply to each process, so that case has two bounds per arm.

The cases cover:

- Delegation, two answers, records saved before the next question, and an unanswered final question.
- A partial answer carried into a fresh session.
- A superseded blocker and a late result from its old research.
- An interrupted do row whose side effect already succeeded.
- Clear approval of the final intent.
- A conversation-only map with a source that is unavailable.

## Evidence and grading

Each session writes its real CLI events to `trace.jsonl`, host replies to `host.jsonl`, and a file snapshot before each question. The host sends an answer only when one question matches the scripted subject. It interrupts at the first question without a scripted answer. An unexpected question, error, or timeout is recorded as such; it is not an interview success.

Every arm has `outputs/transcript.md`, `outputs/files.json`, and `timing.json`. Costs remain null when the CLI does not report them. A harness interruption is not a user refusal or approval. The final unanswered question provides a state boundary, not proof of indefinite waiting.

Grade the expectations against both the events and the saved files. Check the specific files that existed before the next question, not only the final snapshot. Apply the official skill-creator grading schema and generate its review viewer after both arms complete. Record native UI rendering, long waits, actual parallel worker timing, and any conditional-approval cases not run as unverified.

The existing native plugin-eval cases remain useful for single-turn checks. They cannot establish this reply loop because they do not provide a simulated user. The new driver supplies scripted replies through the real question-tool channel instead.
