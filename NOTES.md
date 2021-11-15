# Implementation notes
1. Never used `styled-components` before, so some details might not be too pretty
2. Also haven't styled components manually for a while now, so that might be a bit off in places
3. Ideally could have provided a layered input component approach, where there were presentation components and then "containers" for inputs controlled by react-hook-form. That way it'd be easy to unit-test the presentation components and also switch out form libraries via containers if needed. Decided that it's a bit overkill for this assignment, but wanted to call it out.
4. Theme is pretty basic. Typically would put a lot more keys in there. Manually or dynamically.
5. No form validation aside from whatever's built into the browser. Potentially could use `yup` coupled with `react-hook-form`, but decided that it's also a bit overkill for this task. Would need to parse the job data and create a yup schema dynamically.
6. Would love to use a dropdown + text search for the multi-select, but would rather not without a design system in place.
7. In terms of structuring styles I tried to do a reasonable approach: base-level CSS in index.html and the rest via `styled-components`.