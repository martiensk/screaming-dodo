<template>
    <main>
        <ContentDoc v-slot="{ doc }">
            <ContentRenderer :value="doc">
                <article
                    class="prose mx-auto my-8 max-w-content p-4 md:prose-lg"
                    v-html="
                        `
                            ${doc.content}
                        `
                    " />
            </ContentRenderer>
        </ContentDoc>
    </main>
</template>
