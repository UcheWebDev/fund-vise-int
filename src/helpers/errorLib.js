import { ref } from "vue"
import { useRouter } from "vue-router"

export function useErrorHandling() {
    const error = ref(null)
    const router = useRouter()
    function setError(message) {
        error.value = message
    }
    function clearError() {
        error.value = null
    }

    function handleStatusCodeError(statusCode) {
        switch (statusCode) {
            case 400:
                setError('Bad Request: The server did not understand the request.');
                break;
            case 401:
                setError('Unauthorized: Authentication is required and has failed.');
                setTimeout(() => {
                    router.push('/')
                }, 200);
                break;
            case 403:
                setError('Forbidden: The server understood the request, but it refuses to authorize it.');
                break;
            case 404:
                setError('Not Found: The requested resource could not be found.');
                break;
            case 500:
                setError('Server Error: Please check back later.');
                break;

            default:
                setError('An error occurred with status code: ' + statusCode);
                break;
        }
    }

    return {
        error,
        setError,
        clearError,
        handleStatusCodeError,
    };
}