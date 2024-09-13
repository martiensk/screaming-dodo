/* eslint-disable */
import OpenAI from 'openai';

const apiKey = '';

const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
let article: string | null = null;

/**
 *
 */
async function main() {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: 'You are a javascript programmer.'
            },
            {
                role: 'user',
                content: `Create a blog post from the following content, and format it as semantic HTML. Don't create a full page but only an <article /> element that can be slotted into an existing page: 'Temporal API: Enhances date and time handling. Pipe Operator: Simplifies function chaining. Records and Tuples: Introduces immutable data structures.
RegExp /v Flag: Adds advanced regular expression features.
Decorators: Provides a way to extend class functionality natively.'`
            }
        ],
        model: 'gpt-4o'
    });

    console.log(completion);
    article = completion.choices[0].message.content;
}

export default defineEventHandler(async (event) => {
    setResponseStatus(event, 200);
});
