export const fetches = async(url, method, json) => {
  if(method === "GET" || "DELETE") {
    const response = await fetch(url, {
      method: method
    });
    const data = response.json();
    return data;
  
  } else {
    const response = await fetch(url, {
      method: method,
      body: json,
      headers: { "Content-type": "application/json; charset=UTF-8" }
    });

    console.log(json);
    const data = response.json();
    return data;
  }
};
