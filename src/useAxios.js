import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = '/backend/actions/';


export const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        axios[method](url, body, { cancelToken: source.token })
            .then((res) => {
                if(!unmounted){
                    setResponse(res.data);
                }
            })
            .catch((err) => {
                if(!unmounted){
                    setError(err);
                    if(axios.isCancel(err)){
                        console.log('Richiesta cancellata');
                    }
                }
            })
            .finally(() => {
                setLoading(false);
            });
        return function () {
            unmounted = true;
            source.cancel("Cleanup");
        }
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading };
};