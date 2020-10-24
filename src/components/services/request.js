const request = (path, method, body, letter) => {
  return fetch(`${process.env.GATSBY_API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, letter ? res.text() : res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const post = (path, body, letter) => request(path, 'POST', body, letter);
export const get = path => request(path, 'GET');
