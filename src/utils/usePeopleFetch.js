import React, { useState, useEffect } from 'react';
import axios from 'axios';

const usePeopleFetch = (url) => {
  const [randomUsers, setRandomUsers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    let cancel;

    setisLoading(true);
    setError(false);

    axios.get(url, { cancelToken: new axios.CancelToken(c => cancel = c) })
      .then((res => {
        setRandomUsers(prevUsers => {
          return [...new Set([...prevUsers, ...res.data?.results])]
        })
        setHasMore(res.data?.results.length > 0);
        setisLoading(false);
      }))
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [url]);

  return { randomUsers, isLoading, error, hasMore };

}

export default usePeopleFetch