
Read the provided tutorial and the current HTML state. Generate the next action to be performed based on the tutorial instructions and the HTML state. Provide a video transcript the next step action that describes what is happening on the screen in simple, instructional language.

The output MUST be in JSON format confirming to this TypeScript schema:

```typescript
type HtmlAction = {
  type: "click" | "input";
  transcript: string;
  /** aria-label of the target HTML element to perform the action */
  label?: string;
  /** href of the target HTML element to perform the action */
  href?: string;
  /** Text to type if action type is 'input' */
  text?: string;
};
```

Current HTML State:

{{ADD CURRENT HTML STATE HERE}}

Previously Performed Actions:

{{ADD PREVIOUS ACTIONS HERE}}

Input tutorial:

{{ADD TUTORIAL CONTENT HERE}}