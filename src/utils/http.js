const client = {
  get(url) {
    return fetch(url).then(data => data.json());
  }
};

export default client;
