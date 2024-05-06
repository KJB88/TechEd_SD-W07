const api = "http://localhost:8080/";

export async function fetchWithoutParam(request, successCallback, failureCallback)
{
  console.log(`FETCHING: ${api}${request}`)
    const resp = await fetch(`${api}${request}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    });

    if (resp.ok) {
        const data = await resp.json();
        console.log("GET response received.");
        successCallback(data);
      } else {
        failureCallback("GET", resp.status);
      }
}

export async function fetchWithParam(request, param, successCallback, failureCallback)
{
  const resp = await fetch(`${api}${request}`, {
    method: "GET",
    body: {param},
    headers: {
        "Content-Type": "application/json",
      },
});

if (resp.ok) {
    const data = await resp.json();
    console.log("GET response received.");
    successCallback(data);
  } else {
    failureCallback("GET", resp.status);
  }
}