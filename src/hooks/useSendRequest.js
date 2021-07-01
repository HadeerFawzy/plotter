import { useState } from 'react';
import axios from 'axios';

const useSendRequest = (props) => {
  // params
  const {
    reqType,
    url,
    params = {},
    setLoading
  } = props;

  let requestFunction = null;

  // state
  const [response, setResponse] = useState();

  const sendRequest = () => {
      setLoading(true);
    switch (reqType) {
      case 'POST': 
        requestFunction = axios.post;
        break;
      case 'DELETE': 
        requestFunction = axios.delete;
        break;
      case 'PUT':
        requestFunction = axios.put;
        break;
      case 'PATCH':
        requestFunction = axios.patch;
        break;
      default:
        requestFunction = axios.get;
        break;
    }
    requestFunction(url, params)
      .then((res) => {
      setLoading(false);
        setResponse(res.data);
      })
      .catch((err) => {
      setLoading(false);
      console.log(err)
        // show snack bar with the error
      });
  };
  return {
    sendRequest, response,
  };
};
export default useSendRequest;
