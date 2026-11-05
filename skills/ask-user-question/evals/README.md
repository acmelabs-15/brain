# Question evaluation cases

These cases use the official skill-creator evals.json format. Run the candidate
and the saved prior skill against the same inputs. The files are invented fixtures.
They contain no real project records or user transcripts.

The `expectations` arrays are proposed observable checks. Review them before a
bounded run. Keep each result with its complete transcript, tool events and any
produced files, then use the official grader and review viewer.

| Cases | Profile | Evidence produced |
|---|---|---|
| 1 | Interactive chat with no permitted native question tool | Discovery through the text fallback |
| 2–3, 6–7 | Interactive exchange; recorded context supplied by the prompt or fixture | Preservation and scope of answers |
| 4–5 | Draft a call for the schema in the fixture; do not invoke the executing host's tool | Payload composition only |
| 8 | Interpret the stored host results | Result interpretation only |

These profiles belong to the test host. A fixture does not override the actual
host's permissions or tool schema. Cases 4–5 request a payload as output, so a
Claude evaluation can inspect a Codex-shaped payload without pretending to run
Codex. Cases 6–8 supply past exchanges as data, not live authority to edit files.

No case proves native rendering, indefinite waiting, cancellation, or a successful
submit-to-next-question transition. Test those separately in the intended client.
For a new live result-shape test, extend the existing bounded interview driver
only after defining its host behavior; these fixtures require no driver change.

Creating these cases does not run a model. Use the project's authorization rules
before a new external model run, and record its model, CLI version, budget and
execution outcome. Do not treat a harness interruption as a completed exchange.
