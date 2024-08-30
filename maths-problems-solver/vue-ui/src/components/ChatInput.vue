

<template>
    <div class="container">
        <div class="card flex justify-content-center mt-5">
            <FileUpload @question-sended="searchSolutions" />
        </div>
        <div class="response-card">
            <div class="response-content">
                <pre>{{ generatedResponse }}</pre>
            </div>
        </div>
    </div>
</template>


<script setup>
import { Configuration, OpenAIApi } from "openai";
import { ref } from 'vue';
import FileUpload from "./FileUpload.vue";
const loading = ref(false);
const generatedResponse = ref('')
const configuration = new Configuration({
    apiKey: 'sk-prTvSk1pNCWDgNhLeP',
});
const openai = new OpenAIApi(configuration);


const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};
const searchSolutions = async (ques) => {
    load();
    console.log("searchSolutions", ques);
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: `Please Provide me step by step solution
                               ${ques}`,
                },
            ],
        });


        // Handle the generated response
        generatedResponse.value = formatText(response.data.choices[0].message.content);
        console.log(response.data.choices[0].message.content);
        // const output = response.data.choices[0].message.content
    } catch (error) {
        // Handle errors
        console.error(error);
    } finally {
        loading.value = false;
    }
}
function formatText(text) {
    // Split the text into sentences by looking for periods followed by a space
    const sentences = text.split(/\. /);

    // Initialize an array to store the formatted sentences
    const formattedSentences = [];

    // Loop through each sentence and add a new line after each sentence
    for (const sentence of sentences) {
        formattedSentences.push(sentence + '.\n');
    }

    // Join the formatted sentences to recreate the text
    const formattedText = formattedSentences.join('');

    // Return the formatted text
    return formattedText;
}

// const originalText = `To integrate the function \( \\frac{1}{1 + x^2} \) over the interval \([0, 1]\), we can use the substitution method. Let's set \( u = 1 + x^2 \). Then, \( du = 2x \, dx \) or \( dx = \\frac{du}{2x} \). When \( x = 0 \), \( u = 1 + 0^2 = 1 \). When \( x = 1 \), \( u = 1 + 1^2 = 2 \). Now we can substitute these values and rewrite our integral: \[ \\int_{0}^{1} \\frac{1}{1 + x^2} \, dx = \\int_{1}^{2} \\frac{1}{u} \\cdot \\frac{du}{2x} \] We can divide the constant factors and rearrange the terms: \[ \\int_{0}^{1} \\frac{1}{1 + x^2} \, dx = \\frac{1}{2} \\int_{1}^{2} \\frac{1}{ux} \, du \] Now we can evaluate the logarithmic integral: \[ \\int_{0}^{1} \\frac{1}{1 + x^2} \, dx = \\frac{1}{2} \\ln|ux| \\Big|_{1}^{2} = \\frac{1}{2} \\ln \\left|\\frac{2u}{1}\\right| \\Big|_{1}^{2} = \\frac{1}{2} \\ln \\left(\\frac{4}{1}\\right) - \\frac{1}{2} \\ln \\left(\\frac{2}{1}\\right) = \\boxed{\\frac{1}{2} \\ln 4} \``;

// const formattedText = formatText(originalText);
// console.log("formattedText ==================",formattedText);

</script>
  
<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.response-card {
    width: 800px;
    height: 500px;
    margin-top: 20px;
    overflow: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
}

.response-content {
    text-align: center;
}
</style>