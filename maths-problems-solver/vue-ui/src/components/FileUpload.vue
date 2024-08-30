<template>
    <div class="card flex justify-content-center">
        <input type="file" v-on:change="onSelectedFiles" />
    </div>
</template>
  
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { defineEmits } from 'vue'; // Import defineEmits
const image = ref(null);
const emit = defineEmits(['question-sended']);

const onSelectedFiles = (event) => {
    console.log("event", event);
    if (event) {
        // Assign the selected files to "image.value" directly from the "files" property of the "event" object
        image.value = event.target.files[0];
        console.log("image.value:", image.value);
        // You can call onUpload here if you want to upload the files immediately after selection.
        onUpload();
    }

};

const onUpload = async () => {
    // Assuming you have a backend route to handle file upload at "localhost:5000/upload"
    const uploadUrl = 'http://localhost:8080/upload';

    try {
        const formData = new FormData();
        formData.append('file', image.value)

        // Make the POST request to the backend
        const response = await axios.post(uploadUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        emit('question-sended', response.data.text);
        console.log("resonse  =====>", response);
    } catch (error) {
        // Handle errors if the POST request fails
        console.error('Error uploading files:', error);
    }
};
</script>
  