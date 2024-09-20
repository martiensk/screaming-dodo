<template>
    <main>
        <ContentDoc v-slot="{ doc }">
            <ContentRenderer :value="doc">
                <article
                    class="prose mx-auto my-8 w-full p-4 md:prose-lg"
                    v-html="
                        `
                            <h1>${doc.title}</h1>
                            ${doc.content}
                        `
                    " />
            </ContentRenderer>
        </ContentDoc>
    </main>
</template>
