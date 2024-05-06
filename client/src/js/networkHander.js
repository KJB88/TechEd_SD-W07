const api = "https://teched-sd-w07-server.onrender.com"; //"http://localhost:8080/";//

export async function fetchWithoutParam(request)
{
    const resp = await fetch(`${api}${request}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    });

        const data = await resp.json();
        console.log("GET response received.");
        return data;
}

export async function fetchWithParam(request, param)
{
  const resp = await fetch(`${api}${request}`, {
    method: "GET",
    body: {param},
    headers: {
        "Content-Type": "application/json",
      },
});

    const data = await resp.json();
    console.log("GET response received.");
    return data;
}

export async function post(request, body)
{
  await fetch(`${api}${request}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}