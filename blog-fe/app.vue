<template>
  <div class="p-4">
    <div class="prose" v-html="article" />
  </div>
</template>
<script setup lang="ts">
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/default.min.css';
// import 'highlight.js/styles/dark.min.css';
import 'highlight.js/styles/github-dark.min.css';
// import 'highlight.js/styles/github.min.css';

hljs.registerLanguage('javascript', javascript);

const article = ref<string | null>(`
<article>
  <h2>Latest JavaScript Features: Enhancing Code Efficiency and Readability</h2>
  <p>JavaScript continues to evolve, introducing new features that enhance the language's functionality and ease of use. This article explores five key additions to JavaScript: the Temporal API, Pipe Operator, Records and Tuples, RegExp /v Flag, and Decorators. Each of these features addresses common challenges developers face, making JavaScript an even more powerful tool for building modern web applications.</p>

  <h3>Temporal API: Enhances Date and Time Handling</h3>
  <p>The Temporal API offers a more comprehensive and user-friendly way to handle date and time operations, compared to the traditional <code>Date</code> object.</p>
  <pre><code class="language-javascript">// Creating a Temporal date
const date = Temporal.PlainDate.from('2023-05-30');
console.log(date.toString()); // Output: 2023-05-30

// Adding one month
const newDate = date.add({ months: 1 });
console.log(newDate.toString()); // Output: 2023-06-30
</code></pre>

  <h3>Pipe Operator: Simplifies Function Chaining</h3>
  <p>The Pipe Operator (<code>|></code>) simplifies the process of chaining functions, making the code more readable and maintainable.</p>
  <pre><code class="language-javascript">// Without pipe operator
const result = fn3(fn2(fn1(data)));

// With pipe operator
const result = data |> fn1 |> fn2 |> fn3;
</code></pre>

  <h3>Records and Tuples: Introduces Immutable Data Structures</h3>
  <p>Records and Tuples provide immutable data structures that can improve performance and reliability by preventing unintended modifications.</p>
  <pre><code class="language-javascript">// Creating a record
const record = #{ name: "Alice", age: 30 };
console.log(record.name); // Output: Alice

// Creating a tuple
const tuple = #[1, 2, 3];
console.log(tuple[0]); // Output: 1

// Records and Tuples are immutable
record.age = 31; // TypeError: Cannot assign to read only property 'age'
</code></pre>

  <h3>RegExp /v Flag: Adds Advanced Regular Expression Features</h3>
  <p>The <code>/v</code> flag introduces new advanced regular expression features, enhancing pattern matching capabilities.</p>
  <pre><code class="language-javascript">// Using the /v flag
const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/v;
const result = regex.exec('2024-05-30');
console.log(result.groups.year); // Output: 2024
</code></pre>

  <h3>Decorators: Provides a Way to Extend Class Functionality Natively</h3>
  <p>Decorators offer a native way to add functionality to classes and methods, promoting reusable and modular code.</p>
  <pre><code class="language-javascript">// Defining a decorator
function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Example {
  @readonly
  method() {
    return "This method is read-only.";
  }
}

const obj = new Example();
console.log(obj.method()); // Output: This method is read-only
obj.method = function() { return "Changed"; }; // TypeError: Cannot assign to read only property 'method'
</code></pre>

  <p>These new features in JavaScript demonstrate the language's ongoing development and commitment to improving developer experience. By leveraging the Temporal API, Pipe Operator, Records and Tuples, RegExp /v Flag, and Decorators, developers can write cleaner, more efficient, and more maintainable code.</p>
</article>
`);


onMounted(() => {
  hljs.highlightAll();
});
</script>