import { ref } from 'vue';

export function useLoading() {
    const isLoading = ref(false);

    const startLoading = () => {
        isLoading.value = true;
    };

    const stopLoading = () => {
        isLoading.value = false;
    };

    const withLoading = async (callback) => {
        startLoading();
        try {
            return await callback();
        } finally {
            stopLoading();
        }
    };

    return {
        isLoading,
        startLoading,
        stopLoading,
        withLoading
    };
}