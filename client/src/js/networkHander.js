const api = "localhost:8080/";
export const GET_ALL_USERS = "users?all";

export async function getAll(request, successCallback, failureCallback)
{
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