const globalApiHandler = (url, method, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: `${config.BASE_URL}${url}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${user.token_type} ${user.access_token}`,
      },
      data: data,
    })
      .then(response => {})
      .catch(err => {});
  });
};

export default globalApiHandler;
