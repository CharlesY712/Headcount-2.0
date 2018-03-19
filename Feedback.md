# Evaluation Feedback

## Instructor
Christie Lynam

## Strengths
Nice UI, good passing tests, good clean linter, good use of destructuring. Overall great project.

## Opportunities

1) In a reduce, do not re-assign the accumulator. In our helper.js findAverage method we had "return average =+ percent" when it could be an implicit return with "average + percent"

2) compareStats state was unused. We were trying to implement it, but didnt, and forgot to remove from code.

3) Destructure inside of a render() to remove repetitive code such as this.stats

4) Be careful using index as the key of a component. Using something unique such as the location name.